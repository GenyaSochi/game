<template>
  <div class="layout">
    <HeaderComponent />
    <slot />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '~/components/HeaderComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
</script>

<style>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif;
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  color: #1E2A1E;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  overflow-x: hidden;
}

body {
  background: #FEFCF5;
}

h1, h2, h3, h4, h5, h6 {
  color: #1E2A1E;
  font-weight: 600;
  font-family: 'Fraunces', 'Playfair Display', Georgia, serif;
  font-optical-sizing: auto;
  font-variation-settings: 'SOFT' 50, 'WONK' 0;
  letter-spacing: -0.02em;
}

p, span, a {
  color: #4A5B4A;
}

a {
  transition: color 0.2s ease;
}

a:hover {
  color: #2F6B2F;
}
</style>
