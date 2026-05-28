<template>
  <div class="main-image-wrapper">
    <svg
      class="logo"
      viewBox="0 0 400 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Логотип Эмпатиум"
    >
      <defs>
        <linearGradient id="monoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a1f4a" />
          <stop offset="100%" stop-color="#4a3a7a" />
        </linearGradient>
        <linearGradient id="monoAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E4B88A" />
          <stop offset="100%" stop-color="#C89563" />
        </linearGradient>
        <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Светящийся круг-рамка -->
      <circle
        cx="200"
        cy="175"
        r="130"
        fill="none"
        stroke="#FFFFFF"
        stroke-width="1.2"
        opacity="0.95"
        filter="url(#whiteGlow)"
      />

      <!-- Мандала из трёх лепестков: гармония эмоций, мыслей и действий -->
      <g transform="translate(200, 175)">
        <!-- Тонкие лучи-линии, расходящиеся от центра -->
        <g opacity="0.4" stroke="url(#monoAccent)" stroke-width="1" stroke-linecap="round">
          <line x1="0" y1="-8" x2="0" y2="-95"/>
          <line x1="0" y1="8" x2="0" y2="95" transform="rotate(0)"/>
          <line x1="0" y1="-8" x2="0" y2="-95" transform="rotate(60)"/>
          <line x1="0" y1="-8" x2="0" y2="-95" transform="rotate(120)"/>
          <line x1="0" y1="-8" x2="0" y2="-95" transform="rotate(180)"/>
          <line x1="0" y1="-8" x2="0" y2="-95" transform="rotate(240)"/>
          <line x1="0" y1="-8" x2="0" y2="-95" transform="rotate(300)"/>
        </g>

        <!-- Три лепестка, повёрнутые на 120° друг к другу -->
        <g>
          <!-- Верхний лепесток -->
          <path
            d="M 0 -15
               C -28 -40, -32 -80, 0 -95
               C 32 -80, 28 -40, 0 -15 Z"
            fill="url(#monoGrad)"
            opacity="0.92"
          />
          <!-- Правый нижний лепесток -->
          <path
            d="M 0 -15
               C -28 -40, -32 -80, 0 -95
               C 32 -80, 28 -40, 0 -15 Z"
            fill="url(#monoGrad)"
            opacity="0.92"
            transform="rotate(120)"
          />
          <!-- Левый нижний лепесток -->
          <path
            d="M 0 -15
               C -28 -40, -32 -80, 0 -95
               C 32 -80, 28 -40, 0 -15 Z"
            fill="url(#monoGrad)"
            opacity="0.92"
            transform="rotate(240)"
          />
        </g>

        <!-- Контурные обводки лепестков для лёгкости -->
        <g fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.6">
          <path d="M 0 -15 C -28 -40, -32 -80, 0 -95 C 32 -80, 28 -40, 0 -15 Z"/>
          <path d="M 0 -15 C -28 -40, -32 -80, 0 -95 C 32 -80, 28 -40, 0 -15 Z" transform="rotate(120)"/>
          <path d="M 0 -15 C -28 -40, -32 -80, 0 -95 C 32 -80, 28 -40, 0 -15 Z" transform="rotate(240)"/>
        </g>

        <!-- Внутренний золотой круг (ядро эмоции) -->
        <circle cx="0" cy="0" r="14" fill="url(#monoAccent)" filter="url(#whiteGlow)"/>
        <circle cx="0" cy="0" r="8" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.7"/>
        <circle cx="0" cy="0" r="3" fill="#FFFFFF" opacity="0.95"/>

        <!-- Три маленькие золотые точки на кончиках лепестков -->
        <circle cx="0" cy="-95" r="3" fill="url(#monoAccent)"/>
        <circle cx="0" cy="-95" r="3" fill="url(#monoAccent)" transform="rotate(120)"/>
        <circle cx="0" cy="-95" r="3" fill="url(#monoAccent)" transform="rotate(240)"/>
      </g>

      <!-- Светящаяся разделительная линия -->
      <line
        x1="140"
        y1="335"
        x2="260"
        y2="335"
        stroke="#FFFFFF"
        stroke-width="1.5"
        opacity="0.9"
        filter="url(#whiteGlow)"
      />

      <!-- Светящаяся надпись -->
      <text
        x="200"
        y="372"
        text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="30"
        font-weight="300"
        letter-spacing="8"
        fill="#FFFFFF"
        filter="url(#whiteGlow)"
      >ЭМПАТИУМ</text>
    </svg>
  </div>
</template>

<style scoped>
.main-image-wrapper {
  width: 100%;
  max-width: 420px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
}

.logo {
  width: 100%;
  height: auto;
  display: block;
}
</style>
