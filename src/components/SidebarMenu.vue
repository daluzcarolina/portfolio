<template>
    <div class="sidebar">
      <div class="logo">
        <h1>Meu Portfólio</h1>
      </div>
      <nav class="menu">
        <router-link to="/" class="menu-item">Home</router-link>
        <router-link to="/sobre" class="menu-item">Sobre</router-link>
        <router-link to="/contato" class="menu-item">Contato</router-link>
        <router-link to="/dashboards" class="menu-item">Dashboards</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SidebarMenu'
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #2C2C2C;
    color: #E0E0E0;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 8px rgba(0, 0, 0, 0.2);
  }
  
  .logo {
    padding: 20px;
    text-align: center;
    border-bottom: 2px solid #444;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
  }
  
  .menu-item {
    padding: 15px 20px;
    text-decoration: none;
    color: #E0E0E0;
    font-size: 18px;
    transition: background-color 0.3s, color 0.3s;
    border-bottom: 1px solid #444;
  }
  
  .menu-item:hover,
  .menu-item.active {
    background-color: #3D3D3D;
    color: #FFD700;
  }
  </style>
  