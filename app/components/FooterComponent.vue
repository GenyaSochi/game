<template>
  <footer class="footer">
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

<style scoped>
.footer {
  position: relative;
  background: #1E1A2A;
  padding: 3.5rem 1.5rem 1.5rem;
  margin-top: auto;
  color: #c8bdd4;
  overflow: hidden;
}

.footer__glow {
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
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
  gap: 0.5rem 0.25rem;
}

.footer__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #b8adc6;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.4rem 0.85rem;
  border-radius: 20px;
  transition: color 0.25s ease;
  overflow: hidden;
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
