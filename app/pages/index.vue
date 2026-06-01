<template>
  <main class="page">
    <ClientOnly>
      <canvas
        ref="dustCanvas"
        style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;"
      ></canvas>
    </ClientOnly>
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

    <section class="section">
      <div class="container container--narrow">
        <h2 class="section__title">Что такое Эмпатиум?</h2>
        <div class="section__divider"></div>
        <p class="section__lead">
          Это не просто настольная игра — это авторская методика развития
          эмоционального интеллекта, созданная Елизаветой Ловягиной.
        </p>
        <p class="section__text">
          В безопасном игровом пространстве вы снимаете социальные маски,
          возвращаетесь к естественной открытости и учитесь замечать то, что
          обычно ускользает: микровыражения лица, интонации, настоящие чувства
          собеседника.
        </p>
      </div>
    </section>

    <section class="section section--light">
      <div class="container">
        <h2 class="section__title">Что развивает игра</h2>
        <div class="section__divider"></div>
        <div class="cards">
          <article class="card" v-for="skill in skills" :key="skill.title">
            <div class="card__icon">{{ skill.icon }}</div>
            <h3 class="card__title">{{ skill.title }}</h3>
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
          <article
            class="price-card"
            v-for="plan in plans"
            :key="plan.title"
            :class="{ 'price-card--accent': plan.accent }"
          >
            <h3 class="price-card__title">{{ plan.title }}</h3>
            <p class="price-card__desc">{{ plan.desc }}</p>
            <div class="price-card__price">{{ plan.price }}</div>
            <span class="btn-glow">
              <NuxtLink :to="plan.link" class="btn btn--primary btn--small">
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
          <div class="founder__avatar"></div>
          <div class="founder__content">
            <span class="founder__role">Основатель и автор методики</span>
            <h3 class="founder__name">Елизавета Ловягина</h3>
            <p class="founder__bio">
              Предприниматель, академический эксперт, создатель «Лаборатории
              эмоционального интеллекта». Более 7 лет исследует природу эмпатии
              и разрабатывает практики её развития для частных лиц и корпораций.
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
          <NuxtLink to="/contact" class="btn btn--primary btn--large">
            Оставить заявку
          </NuxtLink>
        </span>
      </div>
    </section>
  </main>
</template>

<script setup>
import MainComponent from '~/components/MainComponent.vue'
import { ref, watch, onBeforeUnmount } from 'vue'

const dustCanvas = ref(null)

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

const onMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
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

    if (mouseX > 0 && mouseY > 0 && time - lastEmit > 20) {
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
  { icon: '◈', title: 'Распознавание эмоций', text: 'Учитесь считывать невербальные и паралингвистические сигналы собеседника.' },
  { icon: '◇', title: 'Эмпатическая связь', text: 'Создаёте глубокий эмоциональный контакт даже с незнакомыми людьми.' },
  { icon: '○', title: 'Управление эмоциями', text: 'Развиваете самоконтроль, стрессоустойчивость и эмоциональную стабильность.' },
  { icon: '△', title: 'Активное слушание', text: 'Слышите не только слова, но и то, что стоит за ними.' },
  { icon: '□', title: 'Командное взаимодействие', text: 'Строите доверие и мотивацию в коллективе через понимание.' },
  { icon: '◆', title: 'Принятие решений', text: 'Принимаете взвешенные решения, учитывая эмоциональный контекст.' },
]

const audiences = [
  { title: 'Для себя', text: 'Тем, кто хочет лучше понимать себя и окружающих.', points: ['Развитие EQ', 'Улучшение отношений', 'Самопознание'] },
  { title: 'Для руководителей', text: 'Лидерам, которые хотят управлять через понимание.', points: ['Построение команды', 'Мотивация', 'Сервисная эмпатия'] },
  { title: 'Для семей', text: 'Родителям и парам, стремящимся к близости.', points: ['Глубокие связи', 'Разрешение конфликтов', 'Безопасность'] },
]

const plans = [
  { title: 'Открытая игра', desc: 'Участие в сборной игре в Москве, СПб или онлайн.', price: '5 000 ₽', cta: 'Узнать расписание', link: '/personal', accent: false },
  { title: 'Практикум ведущего', desc: 'Сертифицированное обучение проведению игр Эмпатиум.', price: 'от 16 000 ₽', cta: 'Подробнее', link: '/facilitator', accent: true },
  { title: 'Корпоративная программа', desc: 'Индивидуальная программа для вашей команды.', price: 'по запросу', cta: 'Связаться', link: '/corporate', accent: false },
]
</script>

<style scoped>
.page { background: #FEFCF5; }

.section { padding: 5rem 1rem; }
.section--light { background: #FFFFFF; }

.container { max-width: 1120px; margin: 0 auto; }
.container--narrow { max-width: 780px; margin: 0 auto; }

.section__title {
  font-size: 2.25rem;
  color: #1E2A1E;
  text-align: center;
  margin-bottom: 0.75rem;
  font-weight: 700;
}
.section__divider {
  width: 48px;
  height: 3px;
  background: #D4A373;
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

.hero { padding: 4rem 1rem 5rem; background: linear-gradient(135deg, #2a1f4a 30%, #7a6ba5 100%); }
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
  font-size: 3.5rem;
  color: white;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
  line-height: 1.1;
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
.hero__actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.hero__media { display: flex; justify-content: center; }

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.stat { text-align: center; padding: 1.5rem 1rem; }
.stat__value {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #8B7AB8;
  margin-bottom: 0.5rem;
}
.stat__label { font-size: 0.95rem; color: #4A5B4A; }

.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.card {
  background: #FEFCF5;
  border: 1px solid #EFECE5;
  border-left: 3px solid #8B7AB8;
  border-radius: 10px;
  padding: 1.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}
.card__icon { font-size: 1.75rem; color: #D4A373; margin-bottom: 0.75rem; }
.card__title { font-size: 1.15rem; color: #1E2A1E; margin-bottom: 0.5rem; font-weight: 700; }
.card__text { font-size: 0.95rem; color: #4A5B4A; line-height: 1.6; }

.audiences { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.audience {
  background: #FFFFFF;
  border: 1px solid #E6E2D8;
  border-radius: 10px;
  padding: 2rem;
}
.audience__title { font-size: 1.3rem; color: #1E2A1E; margin-bottom: 0.75rem; font-weight: 700; }
.audience__text { color: #4A5B4A; margin-bottom: 1.25rem; line-height: 1.6; }
.audience__list { list-style: none; padding: 0; }
.audience__list li {
  padding: 0.4rem 0 0.4rem 1.5rem;
  position: relative;
  color: #4A5B4A;
  font-size: 0.95rem;
}
.audience__list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: #D4A373;
  font-weight: 700;
}

.pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.price-card {
  background: #FEFCF5;
  border: 1px solid #EFECE5;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.price-card--accent {
  background: #FFFFFF;
  border: 1px solid #8B7AB8;
  box-shadow: 0 4px 16px rgba(139, 122, 184, 0.08);
}
.price-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}
.price-card__title { font-size: 1.2rem; color: #1E2A1E; margin-bottom: 0.5rem; font-weight: 700; }
.price-card__desc { font-size: 0.95rem; color: #4A5B4A; line-height: 1.5; margin-bottom: 1.5rem; min-height: 3rem; }
.price-card__price { font-size: 1.75rem; color: #8B7AB8; font-weight: 700; margin-bottom: 1.5rem; }

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
  background: linear-gradient(135deg, #8B7AB8 0%, #D4A373 100%);
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
.founder__name { font-size: 1.6rem; color: #1E2A1E; margin-bottom: 1rem; font-weight: 700; }
.founder__bio { color: #4A5B4A; line-height: 1.7; font-size: 1rem; }

.cta { background: #1E2A1E; padding: 5rem 1rem; text-align: center; }
.cta__title { color: #FEFCF5; font-size: 2.25rem; margin-bottom: 1rem; font-weight: 700; }
.cta__text { color: #E6E2D8; font-size: 1.1rem; margin-bottom: 2rem; }

.btn {
  display: inline-block;
  padding: 0.95rem 2.25rem;
  border-radius: 14px;
  text-decoration: none;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  border: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  position: relative;
}
.btn--primary {
  color: #FFFFFF;
  box-shadow:
    0 4px 14px rgba(139, 122, 184, 0.25),
    0 1px 2px rgba(0, 0, 0, 0.05);
}
.btn--primary:hover {
  box-shadow:
    0 10px 28px rgba(139, 122, 184, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.08);
}

.btn--outline {
  color: #FFFFFF;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.btn--outline:hover {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
}

.btn--small { padding: 0.7rem 1.6rem; font-size: 0.88rem; }
.btn--large { padding: 1.1rem 3rem; font-size: 1.08rem; letter-spacing: 0.05em; }

.btn-glow {
  display: inline-block;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 1.5px;
}
.btn-glow > .btn {
  display: block;
}

@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
  .hero__text { margin-left: auto; margin-right: auto; }
  .hero__actions { justify-content: center; }
  .hero__title { font-size: 2.75rem; }
  .stats { grid-template-columns: repeat(2, 1fr); }
  .cards, .audiences, .pricing { grid-template-columns: 1fr; }
  .founder { flex-direction: column; text-align: center; }
  .section { padding: 3.5rem 1rem; }
  .section__title { font-size: 1.75rem; }
}

@media (max-width: 520px) {
  .hero__title { font-size: 2.25rem; }
  .stats { grid-template-columns: 1fr; gap: 0.5rem; }
  .stat { padding: 0.75rem; }
  .stat__value { font-size: 2rem; }
}
</style>
