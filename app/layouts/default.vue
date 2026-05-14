<template>
  <div class="layout">
    <HeaderComponent />
    <slot />
  </div>
</template>

<script setup>
import HeaderComponent from '~/components/HeaderComponent.vue'
</script>

<style>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, sans-serif;
  color: #5A6B8C;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #F5F5DC;
}
</style>
