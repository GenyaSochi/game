import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

interface FormData {
  name: string
  phone: string
  email?: string
  message?: string
}

interface EmailResponse {
  ok: true
}

const TO_EMAIL = 'promotion.w@yandex.ru'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

let cachedTransporter: Transporter | null = null

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter

  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    throw createError({
      statusCode: 500,
      statusMessage: 'SMTP credentials are not configured',
    })
  }

  cachedTransporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: { user, pass },
  })

  return cachedTransporter
}

export default defineEventHandler(async (event): Promise<EmailResponse> => {
  const body = await readBody(event) as FormData

  const name = body.name?.trim()
  const phone = body.phone?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()

  if (!name || !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Имя и телефон обязательны',
    })
  }

  const html = `
    <h2>Новая заявка с сайта Эмпатиум</h2>
    <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
    <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${email ? escapeHtml(email) : 'не указан'}</p>
    <p><strong>Сообщение:</strong> ${message ? escapeHtml(message) : 'нет'}</p>
  `

  const transporter = getTransporter()

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: TO_EMAIL,
    subject: 'Заявка с сайта — Эмпатиум',
    html,
    replyTo: email || undefined,
  })

  return { ok: true }
})
