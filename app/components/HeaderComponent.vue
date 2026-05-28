<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/" class="header__link">
        <svg
          class="header__logo-icon"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hdrMono" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2a1f4a" />
              <stop offset="100%" stop-color="#4a3a7a" />
            </linearGradient>
            <linearGradient id="hdrAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#E4B88A" />
              <stop offset="100%" stop-color="#C89563" />
            </linearGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#hdrMono)"
            stroke-width="1.5"
          />

          <!-- Мандала: внешняя группа задаёт позицию, внутренняя вращается -->
          <g transform="translate(50, 50)">
            <g class="header__flower">
              <!-- Тонкие лучи -->
              <g opacity="0.45" stroke="url(#hdrAccent)" stroke-width="0.6" stroke-linecap="round">
                <line x1="0" y1="-5" x2="0" y2="-32"/>
                <line x1="0" y1="5" x2="0" y2="32"/>
                <line x1="0" y1="-5" x2="0" y2="-32" transform="rotate(60)"/>
                <line x1="0" y1="-5" x2="0" y2="-32" transform="rotate(120)"/>
                <line x1="0" y1="-5" x2="0" y2="-32" transform="rotate(180)"/>
                <line x1="0" y1="-5" x2="0" y2="-32" transform="rotate(240)"/>
                <line x1="0" y1="-5" x2="0" y2="-32" transform="rotate(300)"/>
              </g>

              <!-- Три лепестка -->
              <g>
                <path
                  d="M 0 -5 C -10 -14, -11 -27, 0 -32 C 11 -27, 10 -14, 0 -5 Z"
                  fill="url(#hdrMono)"
                  opacity="0.95"
                />
                <path
                  d="M 0 -5 C -10 -14, -11 -27, 0 -32 C 11 -27, 10 -14, 0 -5 Z"
                  fill="url(#hdrMono)"
                  opacity="0.95"
                  transform="rotate(120)"
                />
                <path
                  d="M 0 -5 C -10 -14, -11 -27, 0 -32 C 11 -27, 10 -14, 0 -5 Z"
                  fill="url(#hdrMono)"
                  opacity="0.95"
                  transform="rotate(240)"
                />
              </g>

              <!-- Золотое ядро -->
              <circle cx="0" cy="0" r="4.5" fill="url(#hdrAccent)"/>
              <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" opacity="0.9"/>

              <!-- Точки на кончиках -->
              <circle cx="0" cy="-32" r="1" fill="url(#hdrAccent)"/>
              <circle cx="0" cy="-32" r="1" fill="url(#hdrAccent)" transform="rotate(120)"/>
              <circle cx="0" cy="-32" r="1" fill="url(#hdrAccent)" transform="rotate(240)"/>
            </g>
          </g>
        </svg>
        <span class="header__title">ЭМПАТИУМ</span>
      </NuxtLink>
    </div>

    <nav class="header__nav">
      <NuxtLink to="/personal" class="header__nav-link">Личное развитие</NuxtLink>
      <NuxtLink to="/corporate" class="header__nav-link">Корпоративные программы</NuxtLink>
      <NuxtLink to="/about" class="header__nav-link">О проекте</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: #FEFCF5;
  border-bottom: 1px solid #E6E2D8;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
}

.header__logo-icon {
  width: 2.25rem;
  height: 2.25rem;
  flex-shrink: 0;
}

.header__title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #3a2673;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.header__nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.header__nav-link {
  color: #2c3a2c;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
}

.header__nav-link:hover,
.header__nav-link.router-link-active {
  color: #3a2673;
  background: rgba(139, 122, 184, 0.08);
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background: #D4A373;
  transition: transform 0.2s ease;
  transform-origin: center;
}

.header__nav-link:hover::after,
.header__nav-link.router-link-active::after {
  transform: translateX(-50%) scaleX(1);
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

<style>
.header__flower {
  transform-origin: 0 0;
  animation: header-flower-spin 18s linear infinite;
}

@keyframes header-flower-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
