<template>
  <div class="layout">
    <HeaderComponent />
    <main class="page">
      <MainComponent />
      <section class="hero">
        <h1>Добро пожаловать в ЭМПАТИУМ</h1>
        <p>Платформа для развития эмоционального интеллекта</p>
        <NuxtLink to="/personal" class="btn btn--primary">Начать</NuxtLink>
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '~/components/HeaderComponent.vue'
import MainComponent from '~/components/MainComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
</script>

<style scoped>
.page {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #F5F5DC 0%, #FFF 100%);
}

.hero {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #8B7AB8;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  color: #5A6B8C;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn--primary {
  background: linear-gradient(135deg, #B19CD9, #87CEEB);
  color: #fff;
  border: 2px solid transparent;
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(135, 206, 235, 0.4);
}
</style>
