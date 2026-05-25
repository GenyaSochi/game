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

      <!-- Монограмма Э -->
      <g transform="translate(200, 175)">
        <path
          d="M -55 -45 C -55 -85, 55 -85, 55 -45"
          fill="none"
          stroke="url(#monoGrad)"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path
          d="M -65 0 C -65 -30, 65 -30, 65 0"
          fill="none"
          stroke="url(#monoGrad)"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path
          d="M -55 45 C -55 85, 55 85, 55 45"
          fill="none"
          stroke="url(#monoGrad)"
          stroke-width="5"
          stroke-linecap="round"
        />

        <line
          x1="-60"
          y1="-50"
          x2="-60"
          y2="50"
          stroke="url(#monoGrad)"
          stroke-width="5"
          stroke-linecap="round"
        />

        <line
          x1="-78"
          y1="0"
          x2="78"
          y2="0"
          stroke="url(#monoAccent)"
          stroke-width="2.5"
          stroke-linecap="round"
        />
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
  transition: transform 0.4s ease;
}

.logo:hover {
  transform: scale(1.02);
}
</style>
