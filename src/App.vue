<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderPage.vue';
import Footer from './components/FooterV.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F9F9F9;
  color: #333;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #FFF;
  /* Adicione uma borda inferior para separar o conteúdo do rodapé */
  border-bottom: 1px solid #E0E0E0;
}

footer {
  background-color: #F1F1F1;
  padding: 10px;
  text-align: center;
  border-top: 1px solid #E0E0E0;
}
</style>
