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
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #1E2A1E;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #FEFCF5;
}

h1, h2, h3, h4, h5, h6 {
  color: #1E2A1E;
  font-weight: 700;
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
