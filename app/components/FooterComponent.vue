<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__brand">
        <span class="footer__title">ЭМПАТИУМ</span>
        <p class="footer__slogan">Развиваем эмоциональный интеллект</p>
      </div>

      <nav class="footer__nav">
        <NuxtLink to="/personal" class="footer__link">Личное развитие</NuxtLink>
        <NuxtLink to="/corporate" class="footer__link">Корпоративные программы</NuxtLink>
        <NuxtLink to="/about" class="footer__link">О проекте</NuxtLink>
        <NuxtLink to="/contact" class="footer__link">Контакты</NuxtLink>
      </nav>

      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} ЭМПАТИУМ. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #FFFFFF;
  border-top: 1px solid #E6E2D8;
  padding: 2.5rem 1rem;
  margin-top: auto;
  color: #4A5B4A;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer__brand {
  text-align: center;
}

.footer__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1E2A1E;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer__slogan {
  font-size: 0.9rem;
  margin-top: 0.25rem;
  color: #4A5B4A;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 1.5rem;
}

.footer__link {
  color: #4A5B4A;
  text-decoration: none;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
}

.footer__link:hover,
.footer__link.router-link-active {
  color: #2F6B2F;
}

.footer__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background: #D4A373;
  transition: transform 0.2s ease;
}

.footer__link:hover::after,
.footer__link.router-link-active::after {
  transform: translateX(-50%) scaleX(1);
}

.footer__bottom {
  text-align: center;
  font-size: 0.85rem;
  color: #4A5B4A;
  opacity: 0.7;
  padding-top: 1rem;
  border-top: 1px solid #EFECE5;
  width: 100%;
}

@media (min-width: 768px) {
  .footer__container {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .footer__brand {
    text-align: left;
  }

  .footer__bottom {
    width: auto;
    padding-top: 0;
    border-top: none;
  }
}
</style>
