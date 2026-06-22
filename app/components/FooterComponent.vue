<template>
  <footer ref="footerEl" class="footer">
    <canvas ref="glowCanvas" class="footer__canvas"></canvas>
    <div class="footer__glow"></div>
    <div class="footer__container">
      <div class="footer__brand">
        <span class="footer__title">ЭМПАТИУМ</span>
        <p class="footer__slogan">Развиваем эмоциональный интеллект через игру</p>
      </div>

      <nav class="footer__nav">
        <NuxtLink to="/personal" class="footer__link">
          <span class="gradient-border"></span>
          Личное развитие
        </NuxtLink>
        <NuxtLink to="/corporate" class="footer__link">
          <span class="gradient-border"></span>
          Корпоратив
        </NuxtLink>
        <NuxtLink to="/facilitator" class="footer__link">
          <span class="gradient-border"></span>
          Практикум
        </NuxtLink>
        <NuxtLink to="/about" class="footer__link">
          <span class="gradient-border"></span>
          О проекте
        </NuxtLink>
        <NuxtLink to="/contact" class="footer__link">
          <span class="gradient-border"></span>
          Контакты
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const footerEl = ref(null)
const glowCanvas = ref(null)

let animId = null
let mouseX = -999
let mouseY = -999
let isMoving = false
let idleTimer = null
let resizeObserver = null

const onPointerMove = (x, y) => {
  if (!footerEl.value) return
  const rect = footerEl.value.getBoundingClientRect()
  mouseX = x - rect.left
  mouseY = y - rect.top
  isMoving = true
  if (idleTimer) clearTimeout(idleTimer)
  idleTimer = setTimeout(() => { isMoving = false }, 150)
}

const onMouseMove = (e) => {
  onPointerMove(e.clientX, e.clientY)
}

const onTouchMove = (e) => {
  if (e.touches.length > 0) {
    onPointerMove(e.touches[0].clientX, e.touches[0].clientY)
  }
}

const onTouchStart = (e) => {
  if (e.touches.length > 0) {
    onPointerMove(e.touches[0].clientX, e.touches[0].clientY)
  }
}

const onTouchEnd = () => {
  isMoving = false
  mouseX = -999
  mouseY = -999
}

const onMouseLeave = () => {
  mouseX = -999
  mouseY = -999
  isMoving = false
}

const startGlow = (canvas) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    const footer = footerEl.value
    if (!footer) return
    canvas.width = footer.offsetWidth
    canvas.height = footer.offsetHeight
  }
  resize()

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(footerEl.value)

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('touchmove', onTouchMove, { passive: true })
  window.addEventListener('touchstart', onTouchStart, { passive: true })
  window.addEventListener('touchend', onTouchEnd)
  window.addEventListener('touchcancel', onTouchEnd)

  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (mouseX > 0 && mouseY > 0) {
      ctx.globalAlpha = isMoving ? 0.35 : 0.2

      const r = 90
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, r)
      gradient.addColorStop(0, 'rgba(140, 100, 180, 0.6)')
      gradient.addColorStop(0.4, 'rgba(167, 139, 186, 0.25)')
      gradient.addColorStop(1, 'rgba(140, 100, 180, 0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, r, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.globalAlpha = 1
    animId = requestAnimationFrame(loop)
  }

  animId = requestAnimationFrame(loop)
}

onMounted(async () => {
  await nextTick()
  if (glowCanvas.value) {
    startGlow(glowCanvas.value)
  }
})

onBeforeUnmount(() => {
  if (animId) cancelAnimationFrame(animId)
  if (idleTimer) clearTimeout(idleTimer)
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchend', onTouchEnd)
  window.removeEventListener('touchcancel', onTouchEnd)
})
</script>

<style scoped>
.footer {
  position: relative;
  background: #1E1A2A;
  padding: 3.5rem 1.5rem 1.5rem;
  margin-top: auto;
  color: #c8bdd4;
  overflow: visible;
}

.footer__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.footer__glow {
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
  width: min(600px, 100vw);
  height: 300px;
  background: radial-gradient(ellipse, rgba(140, 100, 180, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.footer__container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.footer__brand {
  text-align: center;
}

.footer__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #F0EAF5;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.footer__slogan {
  font-size: 0.85rem;
  margin-top: 0.35rem;
  color: #9a8daa;
  font-style: italic;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 0.5rem;
}

.footer__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #b8adc6;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.55rem 1rem;
  border-radius: 20px;
  transition: color 0.25s ease;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.footer__link:hover,
.footer__link.router-link-active {
  color: #F0EAF5;
}

.footer__link .gradient-border {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(
    90deg,
    #8B7AB8,
    #a78bba,
    #d4a373,
    #6dd5b0,
    #8B7AB8
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
  transition: opacity 0.35s ease;
  animation: gradient-rotate 4s linear infinite;
  pointer-events: none;
}

.footer__link:hover .gradient-border,
.footer__link.router-link-active .gradient-border {
  opacity: 1;
}

@keyframes gradient-rotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (max-width: 480px) {
  .footer {
    padding: 2.5rem 1rem 1rem;
  }

  .footer__nav {
    gap: 0.4rem;
  }

  .footer__link {
    font-size: 0.85rem;
    padding: 0.6rem 0.9rem;
  }
}

@media (min-width: 768px) {
  .footer {
    padding: 4rem 2rem 2rem;
  }

  .footer__container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer__brand {
    text-align: left;
    flex-shrink: 0;
  }

  .footer__nav {
    justify-content: center;
    flex: 1;
    padding: 0 2rem;
  }
}
</style>
