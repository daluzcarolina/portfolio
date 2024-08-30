<template>
  <div class="home">
    <img src="/Designer.png" alt="Logo" class="Logo">
    <h1>Welcome to My Portfolio</h1>
    <p>
      I am Carolina da Luz Silva. I was born in 1997 in Brazil, where I currently live. I speak advanced English and I am learning French. I am passionate about data science and aspire to develop my career in this field. Learn more about my projects and get in touch.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
  color: #333;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
}

.Logo {
  width: 300px; /* Ajuste o tamanho do logotipo conforme necessário */
  height: auto;
}

</style>

