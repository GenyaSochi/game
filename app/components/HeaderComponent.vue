<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/" class="header__link">
        <span class="header__title">ЭМПАТИУМ</span>
      </NuxtLink>
    </div>

    <nav class="header__nav">
      <NuxtLink to="/personal" class="header__nav-link">Личное развитие</NuxtLink>
      <NuxtLink to="/corporate" class="header__nav-link">Корпоративные программы</NuxtLink>
      <NuxtLink to="/about" class="header__nav-link">О проекте</NuxtLink>
      <NuxtLink to="/contact" class="header__nav-link header__nav-link--accent"></NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #F5F5DC 0%, #E8D5C4 100%);
  border-bottom: 2px solid #B19CD9;
  box-shadow: 0 2px 8px rgba(135, 206, 235, 0.15);
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #8B7AB8;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.header__link {
  text-decoration: none;
}

.header__nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.header__nav-link {
  color: #5A6B8C;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
}

.header__nav-link:hover,
.header__nav-link.router-link-active {
  color: #B19CD9;
  background: rgba(177, 156, 217, 0.1);
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background: #87CEEB;
  transition: transform 0.2s ease;
  transform-origin: center;
}

.header__nav-link:hover::after,
.header__nav-link.router-link-active::after {
  transform: translateX(-50%) scaleX(1);
}

.header__nav-link--accent {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #B19CD9, #87CEEB);
  border: 2px solid #F5F5DC;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.header__nav-link--accent:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(135, 206, 235, 0.4);
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .header__nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>