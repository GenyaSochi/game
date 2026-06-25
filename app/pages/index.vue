<template>
  <main class="page">
    <ClientOnly>
      <canvas ref="dustCanvas"
        style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;"></canvas>
    </ClientOnly>

    <div class="flowers" aria-hidden="true">
      <img v-for="flower in flowers" :key="flower.src" :src="flower.src" alt="" class="flower" :style="{
        top: flower.top,
        left: flower.left,
        width: flower.size,
        transform: `rotate(${flower.rotate}deg)`,
        opacity: flower.opacity,
      }" />
    </div>

    <section class="hero">
      <div class="hero__inner">
        <div class="hero__content">
          <span class="hero__badge">Авторская игровая технология</span>
          <h1 class="hero__title">ЭМПАТИУМ</h1>
          <p class="hero__subtitle">
            Платформа для развития эмоционального интеллекта через глубокую игру
          </p>
          <p class="hero__text">
            Научитесь читать эмоции, выстраивать глубокие связи и управлять
            отношениями в игре, которая меняет реальную жизнь
          </p>
          <div class="hero__actions">
            <span class="btn-glow">
              <NuxtLink to="/personal" class="btn btn--primary">Узнать расписание</NuxtLink>
            </span>
            <span class="btn-glow">
              <NuxtLink to="/about" class="btn btn--outline">Подробнее</NuxtLink>
            </span>
          </div>
        </div>
        <div class="hero__media">
          <MainComponent />
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <div class="stats">
          <div class="stat" v-for="item in stats" :key="item.label">
            <span class="stat__value">{{ item.value }}</span>
            <span class="stat__label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--empatiyum">
      <div class="container container--narrow">
        <h2 class="section__title">Что такое Эмпатиум</h2>
        <div class="section__divider"></div>
        <p class="section__lead">
          «Эмпатиум» — это не скучная настолка — это игра-терапия, по которой бережно вас проведет
          практик Елена Смецкая
          и за 2 часа научит читать людей
          как открытые книги
        </p>
        <p class="section__text">
          Вы снимете маски, вернётесь к естественной открытости и начнёте
          замечать то, что обычно ускользает: микровыражения лица, интонации,
          настоящие чувства собеседника
        </p>
        <p class="section__cta-text">Хотите, чтобы вас понимали без слов?</p>
        <div class="section__cta">
          <span class="btn-glow">
            <button class="btn btn--primary" @click="showForm = true">Записаться на игру</button>
          </span>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <h2 class="section__title">Что развивает игра</h2>
        <div class="section__divider"></div>
        <div class="cards">
          <article class="card" v-for="skill in skills" :key="skill.title">
            <h3 class="card__title">
              <span class="gradient-border"></span>
              {{ skill.title }}
            </h3>
            <p class="card__text">{{ skill.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section__title">Для кого</h2>
        <div class="section__divider"></div>
        <div class="audiences">
          <article class="audience" v-for="aud in audiences" :key="aud.title">
            <div class="gradient-border"></div>
            <h3 class="audience__title">{{ aud.title }}</h3>
            <p class="audience__text">{{ aud.text }}</p>
            <ul class="audience__list">
              <li v-for="point in aud.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <h2 class="section__title">Форматы и стоимость</h2>
        <div class="section__divider"></div>
        <div class="pricing">
          <article class="price-card" v-for="plan in plans" :key="plan.title"
            :class="{ 'price-card--accent': plan.accent }">
            <div class="gradient-border"></div>
            <h3 class="price-card__title">{{ plan.title }}</h3>
            <p class="price-card__desc">{{ plan.desc }}</p>
            <div class="price-card__price">{{ plan.price }}</div>
            <span class="btn-glow">
              <button v-if="plan.cta === 'Связаться'" class="btn btn--primary btn--small" @click="showForm = true">
                {{ plan.cta }}
              </button>
              <NuxtLink v-else :to="plan.link" class="btn btn--primary btn--small">
                {{ plan.cta }}
              </NuxtLink>
            </span>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container--narrow">
        <div class="founder">
          <img class="founder__avatar" src="/photo/main.webp" alt="Елена Смецкая" />
          <div class="founder__content">
            <span class="founder__role">персональная консультация</span>
            <h3 class="founder__name">Елена Смецкая</h3>
            <p class="founder__bio">
              предприниматель, академический эксперт, руководитель «Лаборатории эмоционального интеллекта». Более 7 лет
              она исследует природу эмпатии и разрабатывает практики её развития для частных лиц и корпораций. Елена —
              ученица Елизаветы Ловягиной и бережно передаёт методику «Эмпатиум» в своей работе.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2 class="cta__title">Готовы начать?</h2>
        <p class="cta__text">
          Оставьте заявку и мы подберём для вас подходящий формат игры
        </p>
        <span class="btn-glow btn-glow--large">
          <button class="btn btn--primary btn--large" @click="showForm = true">Оставить заявку</button>
        </span>
      </div>
    </section>
  </main>

  <!-- Modal Feedback Form -->
  <Teleport to="body">
    <div v-if="showForm" class="modal-overlay" @click.self="showForm = false">
      <div class="modal">
        <div class="gradient-border"></div>
        <button class="modal__close" @click="showForm = false">&times;</button>
        <h3 class="modal__title">Записаться на игру</h3>
        <p class="modal__subtitle">Оставьте заявку и мы свяжемся с вами</p>
        <form class="modal__form" @submit.prevent="submitForm">
          <input v-model="form.name" type="text" placeholder="Ваше имя" required class="modal__input" />
          <input v-model="form.phone" type="tel" placeholder="Телефон" required class="modal__input" />
          <input v-model="form.email" type="email" placeholder="Email" class="modal__input" />
          <textarea v-model="form.message" placeholder="Сообщение (необязательно)" class="modal__textarea" rows="3"></textarea>
          <button type="submit" class="btn btn--primary modal__submit" :disabled="formSent">
            {{ formSent ? 'Отправлено!' : 'Отправить' }}
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import MainComponent from '~/components/MainComponent.vue'
import { ref, reactive, watch, onBeforeUnmount } from 'vue'

const dustCanvas = ref(null)
const showForm = ref(false)
const formSent = ref(false)
const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
})

async function submitForm() {
  try {
    await $fetch('/api/send-email', {
      method: 'POST',
      body: { ...form },
    })
    formSent.value = true
    setTimeout(() => {
      showForm.value = false
      formSent.value = false
      form.name = ''
      form.phone = ''
      form.email = ''
      form.message = ''
    }, 2000)
  } catch (e) {
    console.error('Ошибка отправки:', e)
    alert('Не удалось отправить. Попробуйте позже.')
  }
}

const golds = [
  [212, 163, 115],
  [228, 184, 138],
  [200, 149, 99],
  [255, 215, 140],
  [255, 235, 180],
]

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * 2
    this.vy = (Math.random() - 0.5) * 2 - 1.5
    this.life = 1
    this.decay = 0.02 + Math.random() * 0.02
    this.size = 2 + Math.random() * 2
    this.color = golds[Math.floor(Math.random() * golds.length)]
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.vy += 0.04
    this.vx *= 0.98
    this.life -= this.decay
  }

  draw(ctx) {
    if (this.life <= 0) return
    const alpha = Math.max(0, this.life * 0.8)
    const radius = Math.max(0.1, this.size * this.life)
    const [r, g, b] = this.color
    ctx.globalAlpha = alpha
    ctx.beginPath()
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
    ctx.shadowBlur = 6
    ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.6)`
    ctx.fill()
  }
}

let particles = []
let mouseX = -999
let mouseY = -999
let lastEmit = 0
let animId = null
let running = false
let resizeHandler = null
let isMoving = false
let idleTimer = null

const onMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  isMoving = true
  if (idleTimer) clearTimeout(idleTimer)
  idleTimer = setTimeout(() => {
    isMoving = false
  }, 120)
}

const startDust = (canvas) => {
  if (running) return
  running = true

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  resizeHandler = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeHandler()

  window.addEventListener('resize', resizeHandler)
  window.addEventListener('mousemove', onMouseMove)

  console.log('[dust] started, canvas:', canvas.width, 'x', canvas.height)

  const loop = (time) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Ореол вокруг курсора (всегда)
    if (mouseX > 0 && mouseY > 0) {
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 20)
      gradient.addColorStop(0, 'rgba(212, 163, 115, 0.4)')
      gradient.addColorStop(0.5, 'rgba(228, 184, 138, 0.2)')
      gradient.addColorStop(1, 'rgba(255, 215, 140, 0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2)
      ctx.fill()
    }

    // Искры только при движении
    if (mouseX > 0 && mouseY > 0 && isMoving && time - lastEmit > 20) {
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(
          mouseX + (Math.random() - 0.5) * 8,
          mouseY + (Math.random() - 0.5) * 8
        ))
      }
      lastEmit = time
    }

    ctx.globalAlpha = 1
    ctx.shadowBlur = 0

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.update()
      if (p.life <= 0) {
        particles.splice(i, 1)
      } else {
        p.draw(ctx)
      }
    }

    if (particles.length > 200) {
      particles = particles.slice(-200)
    }

    animId = requestAnimationFrame(loop)
  }

  animId = requestAnimationFrame(loop)
}

watch(dustCanvas, (canvas) => {
  if (canvas) startDust(canvas)
}, { flush: 'post' })

onBeforeUnmount(() => {
  if (animId) cancelAnimationFrame(animId)
  if (idleTimer) clearTimeout(idleTimer)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  window.removeEventListener('mousemove', onMouseMove)
  running = false
  particles = []
})

const stats = [
  { value: '10 000+', label: 'игроков' },
  { value: '100+', label: 'городов' },
  { value: '50+', label: 'корпоративных клиентов' },
  { value: '7+', label: 'лет технологии' },
]

const skills = [
  { icon: '◈', title: 'Распознавание эмоций', text: 'Учитесь считывать невербальные и паралингвистические сигналы собеседника' },
  { icon: '◇', title: 'Эмпатическая связь', text: 'Создаёте глубокий эмоциональный контакт даже с незнакомыми людьми' },
  { icon: '○', title: 'Управление эмоциями', text: 'Развиваете самоконтроль, стрессоустойчивость и эмоциональную стабильность' },
  { icon: '△', title: 'Активное слушание', text: 'Слышите не только слова, но и то, что стоит за ними' },
  { icon: '□', title: 'Командное взаимодействие', text: 'Строите доверие и мотивацию в коллективе через понимание' },
  { icon: '◆', title: 'Принятие решений', text: 'Принимаете взвешенные решения, учитывая эмоциональный контекст' },
]

const audiences = [
  { title: 'Для себя', text: 'Тем, кто хочет лучше понимать себя и окружающих', points: ['Развитие EQ', 'Улучшение отношений', 'Самопознание'] },
  { title: 'Для руководителей', text: 'Лидерам, которые хотят управлять через понимание', points: ['Построение команды', 'Мотивация', 'Сервисная эмпатия'] },
  { title: 'Для семей', text: 'Родителям и парам, стремящимся к близости', points: ['Глубокие связи', 'Разрешение конфликтов', 'Безопасность'] },
]

const plans = [
  { title: 'Открытая игра', desc: 'Участие в сборной игре в Москве, СПб или онлайн', price: '5 000 ₽', cta: 'Узнать расписание', link: '/personal', accent: false },
  { title: 'Практикум ведущего', desc: 'Сертифицированное обучение проведению игр Эмпатиум', price: 'от 16 000 ₽', cta: 'Подробнее', link: '/facilitator', accent: true },
  { title: 'Корпоративная программа', desc: 'Индивидуальная программа для вашей команды', price: 'по запросу', cta: 'Связаться', link: '/corporate', accent: false },
]
</script>

<style scoped>
:root {
  --color-primary: #8B7AB8;
  --color-accent-purple: #a78bba;
  --color-accent-pink: #d4a373;
  --color-accent-cyan: #6dd5b0;
  --radius-xl: 18px;
  --transition-normal: 0.35s ease;
}

.page {
  background: #FEFCF5;
  position: relative;
  overflow: hidden;
}

.flowers {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.flower {
  position: absolute;
  user-select: none;
  mix-blend-mode: multiply;
  filter: drop-shadow(0 8px 20px rgba(139, 122, 184, 0.15)) saturate(0.95) contrast(0.98);
  transition: transform 0.6s ease;
}

.page>section,
.page>.container {
  position: relative;
  z-index: 2;
  
}

.section {
  padding: 5rem 1rem;
}

.section--light {
  background:
    linear-gradient(135deg,
      #FEFCF5 0%,
      #FBF7EE 35%,
      #F4EEFB 70%,
      #EFE7F7 100%);
  position: relative;
}

.section--light::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(212, 163, 115, 0.06), transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(139, 122, 184, 0.07), transparent 50%);
  pointer-events: none;
}

.section--skills {
  position: relative;
  background: url(/photo/poster_event_styled.webp) center center/cover no-repeat;
  padding: 5rem 1rem;
}

.section--skills::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(30, 20, 40, 0.75);
  pointer-events: none;
}

.section--skills .container {
  position: relative;
  z-index: 1;
}

.section--skills .section__title,
.section--skills .section__divider {
  color: #F0EAF5;
}

.section--skills .card__title {
  color: #F0EAF5;
}

.section--skills .card__text {
  color: #d4cde0;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
  padding: 0 0 40px 0;
}

.container--narrow {
  max-width: 780px;
  margin: 0 auto;
}

.section__title {
  font-family: 'Fraunces', 'Playfair Display', Georgia, serif;
  font-optical-sizing: auto;
  font-variation-settings: 'SOFT' 50, 'WONK' 0;
  font-size: 2.75rem;
  color: #3D2C5A;
  text-align: center;
  margin-bottom: 0.75rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.section__divider {
  width: 48px;
  height: 3px;
  background: #6B5A9E;
  margin: 0 auto 2rem;
  border-radius: 2px;
}

.section__lead {
  font-size: 1.25rem;
  color: #1E2A1E;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.section__text {
  font-size: 1.05rem;
  color: #4A5B4A;
  text-align: center;
  line-height: 1.7;
}

.section--empatiyum {
  background:
    linear-gradient(135deg,
      #F8EDDF 0%,
      #F1E2E6 45%,
      #E8D9F0 100%);
  position: relative;
}

.section--empatiyum::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(212, 163, 115, 0.14), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(139, 122, 184, 0.14), transparent 55%);
  pointer-events: none;
}

.section__cta-text {
  font-size: 1.2rem;
  color: #1E2A1E;
  text-align: center;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.section__cta {
  display: flex;
  justify-content: center;
}

.hero {
  padding: 4rem 1rem 5rem;
  background: linear-gradient(135deg, #2a1f4a 30%, #7a6ba5 100%);
}

.hero__inner {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero__badge {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  background: rgba(139, 122, 184, 0.1);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
  border: 1px solid rgba(150, 139, 182, 0.2);
  margin-bottom: 1.25rem;
}

.hero__title {
  font-family: 'Fraunces', 'Playfair Display', Georgia, serif;
  font-optical-sizing: auto;
  font-variation-settings: 'SOFT' 100, 'WONK' 1;
  font-size: 4rem;
  color: white;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
  line-height: 1.05;
  text-shadow: 0 2px 30px rgba(139, 122, 184, 0.35);
}

.hero__subtitle {
  font-size: 1.35rem;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.hero__text {
  font-size: 1.05rem;
  color: white;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 480px;
}

.hero__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.hero__media {
  display: flex;
  justify-content: center;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat {
  text-align: center;
  padding: 1.5rem 1rem;
}

.stat__value {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #8B7AB8;
  margin-bottom: 0.5rem;
  text-shadow:
    0 0 20px rgba(139, 122, 184, 0.45),
    0 0 40px rgba(139, 122, 184, 0.2),
    0 0 60px rgba(139, 122, 184, 0.1);
}

.stat__label {
  font-size: 0.95rem;
  color: #4A5B4A;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.card {
  position: relative;
  border-radius: 18px;
  padding: 2.25rem 1.75rem 1.75rem;
  overflow: hidden;
  isolation: isolate;
  background: transparent;
  border: none;
  text-align: center;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.35s ease;
  box-shadow:
    0 0 15px rgba(0, 220, 130, 0.1),
    0 0 30px rgba(139, 92, 246, 0.06),
    0 0 60px rgba(0, 220, 130, 0.04);
}

.card::before {
  content: '';
  position: absolute;
  top: 20%;
  left: -20%;
  width: 180%;
  height: 180%;
  background: conic-gradient(from 0deg at 50% 50%,
      transparent 80deg,
      transparent 180deg,
      #D4A373 300deg,
      #8B7AB8 330deg,
      #D4A373 360deg);
  animation: card-glow-spin 5s linear infinite;
  z-index: -2;
  pointer-events: none;
}

.card::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: -1;
  pointer-events: none;
}

.card>* {
  position: relative;
  z-index: 1;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 0 20px rgba(0, 220, 130, 0.25),
    0 0 40px rgba(139, 92, 246, 0.15),
    0 0 80px rgba(0, 220, 130, 0.08);
}

.card:hover .gradient-border,
.audience:hover .gradient-border,
.price-card:hover .gradient-border,
.card:hover .card__title .gradient-border {
  opacity: 1;
}

.modal .gradient-border {
  opacity: 1;
}

.gradient-border {
  position: absolute;
  inset: 0;
  border-radius: 6px;
  padding: 2px;
  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-accent-purple),
    var(--color-accent-pink),
    var(--color-accent-cyan),
    var(--color-primary)
  );
  background-size: 300% 300%;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: 1;
  opacity: 0;
  transition: opacity var(--transition-normal);
  animation: gradient-rotate 4s linear infinite;
  pointer-events: none;
}

@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes card-glow-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card__title {
  position: relative;
  display: inline-block;
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.25rem;
  color: #3D2C5A;
  margin-bottom: 0.65rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.25;
  padding: 0.15em 0.3em;
}

.card__text {
  font-size: 0.95rem;
  color: #4A5B4A;
  line-height: 1.65;
}

.audiences {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.audience {
  background: #FFFFFF;
  border: 1px solid #E6E2D8;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.35s ease;
  box-shadow:
    0 0 15px rgba(0, 220, 130, 0.1),
    0 0 30px rgba(139, 92, 246, 0.06),
    0 0 60px rgba(0, 220, 130, 0.04);
}

.audience:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 20px rgba(0, 220, 130, 0.25),
    0 0 40px rgba(139, 92, 246, 0.15),
    0 0 80px rgba(0, 220, 130, 0.08);
}

.audience__title {
  font-size: 1.3rem;
  color: #1E2A1E;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.audience__text {
  color: #4A5B4A;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.audience__list {
  list-style: none;
  padding: 0;
}

.audience__list li {
  padding: 0.4rem 0;
  color: #4A5B4A;
  font-size: 0.95rem;
}

.audience__list li::before {
  content: '— ';
  color: #D4A373;
  font-weight: 700;
}

.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.price-card {
  background: #FEFCF5;
  border: 1px solid #EFECE5;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.35s ease;
  box-shadow:
    0 0 15px rgba(0, 220, 130, 0.1),
    0 0 30px rgba(139, 92, 246, 0.06),
    0 0 60px rgba(0, 220, 130, 0.04);
}

.price-card--accent {
  background: #FFFFFF;
  border: 1px solid #8B7AB8;
}

.price-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 20px rgba(0, 220, 130, 0.25),
    0 0 40px rgba(139, 92, 246, 0.15),
    0 0 80px rgba(0, 220, 130, 0.08);
}

.price-card__title {
  font-size: 1.2rem;
  color: #1E2A1E;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.price-card__desc {
  font-size: 0.95rem;
  color: #4A5B4A;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  min-height: 3rem;
}

.price-card__price {
  font-size: 1.75rem;
  color: #8B7AB8;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.founder {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E6E2D8;
  border-radius: 12px;
  padding: 2.5rem;
}

.founder__avatar {
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #FEFCF5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.founder__role {
  font-size: 0.85rem;
  color: #8B7AB8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.founder__name {
  font-size: 1.6rem;
  color: #1E2A1E;
  margin-bottom: 1rem;
  font-weight: 700;
}

.founder__bio {
  color: #4A5B4A;
  line-height: 1.7;
  font-size: 1rem;
}

/* .cta {
  background: #1E2A1E;
  padding: 5rem 1rem;
  text-align: center;
  background: url(/photo/poster_event_styled.webp) center center/contain no-repeat #fff;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
} */

.cta__title {
  color: #3D2C5A;
  font-size: 2.75rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta__text {
  color: #2e2d3b;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.95rem 2.25rem;
  border-radius: 14px;
  text-decoration: none;
  font-family: 'Manrope', system-ui, sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  border: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  position: relative;
}

.btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #8B7AB8 0%, #6B5A9E 50%, #9A88C4 100%);
  background-size: 200% 200%;
  background-position: 0% 50%;
  box-shadow:
    0 4px 14px rgba(139, 122, 184, 0.35),
    0 1px 2px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn--primary:hover {
  background-position: 100% 50%;
  transform: translateY(-2px);
  box-shadow:
    0 12px 28px rgba(139, 122, 184, 0.5),
    0 4px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.btn--outline {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.btn--outline:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
}

.btn--small {
  padding: 0.7rem 1.6rem;
  font-size: 0.88rem;
}

.btn--large {
  padding: 1.1rem 3rem;
  font-size: 1.08rem;
  letter-spacing: 0.05em;
}

.btn-glow {
  display: inline-block;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 1.5px;
}

.btn-glow>.btn {
  display: block;
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero__text {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__title {
    font-size: 2.75rem;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .cards,
  .audiences,
  .pricing {
    grid-template-columns: 1fr;
  }

  .founder {
    flex-direction: column;
    text-align: center;
  }

  .section {
    padding: 3.5rem 1rem;
  }

  .section__title {
    font-size: 1.75rem;
  }
}

@media (max-width: 520px) {
  .hero__title {
    font-size: 2.25rem;
  }

  .stats {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .stat {
    padding: 0.75rem;
  }

  .stat__value {
    font-size: 2rem;
  }
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(30, 20, 40, 0.7);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1rem;
}

.modal {
  background: #FEFCF5;
  border-radius: var(--radius-xl);
  padding: 2.5rem 2rem;
  max-width: 440px;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 0 15px rgba(0, 220, 130, 0.1),
    0 0 30px rgba(139, 92, 246, 0.06),
    0 0 60px rgba(0, 220, 130, 0.04),
    0 25px 60px rgba(60, 30, 80, 0.3);
}

.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.75rem;
  color: #888;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
}

.modal__close:hover {
  color: #333;
}

.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: #2e2d3b;
}

.modal__subtitle {
  font-size: 0.95rem;
  color: #777;
  margin: 0 0 1.5rem;
}

.modal__form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.modal__input,
.modal__textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #e0dce6;
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: inherit;
  background: #fff;
  color: #2e2d3b;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
  box-sizing: border-box;
}

.modal__input:focus,
.modal__textarea:focus {
  border-color: #a78bba;
  box-shadow: 0 0 0 3px rgba(167, 139, 186, 0.15);
}

.modal__textarea {
  resize: vertical;
  min-height: 70px;
}

.modal__submit {
  margin-top: 0.5rem;
}

.modal__submit:disabled {
  opacity: 0.7;
  cursor: default;
}
</style>
