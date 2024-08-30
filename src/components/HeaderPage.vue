<template>
  <header class="header">
    <nav class="menu">
      <router-link to="/" class="menu-item">Home</router-link>
      <router-link to="/sobre" class="menu-item">About</router-link>
      <router-link to="/projetos" class="menu-item">Projects</router-link>
      <router-link to="/dashboards" class="menu-item">Dashboards</router-link>
      <router-link to="/contato" class="menu-item">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style scoped>
.header {
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.menu-item {
  text-decoration: none;
  color: #666666;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.menu-item:hover {
  background-color: #E0E0E0;
  padding: 10px 25px;
  color: #333;
}
</style>

