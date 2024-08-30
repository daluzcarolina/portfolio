<template>
    <div class="about-container">
      <h1 class="title">About Me</h1>
      <p class="description">
        Hello! I'm Carolina da Luz Silva, a passionate Data Scientist and Front-End Developer. With expertise in R, Python, SQL, and Power BI, I specialize in analyzing data to uncover insights and develop interactive data visualizations. In addition to my data science skills, I also enjoy crafting beautiful and responsive web interfaces. Welcome to my portfolio where you can explore my work and learn more about my projects.
      </p>
      <section class="team">
        <h2 class="subtitle">My Skills</h2>
        <ul class="skills-list">
          <li class="skill-item">Data Science (R, Python)</li>
          <li class="skill-item">SQL & Database Management</li>
          <li class="skill-item">Data Visualization with Power BI</li>
          <li class="skill-item">Front-End Development (Vue.js, HTML, CSS)</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
    text-align: center;
  }
  
  .team {
    margin-top: 40px;
  }
  
  .subtitle {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .skills-list {
    list-style-type: none;
    padding: 0;
    text-align: center;
  }
  
  .skill-item {
    font-size: 1.2rem;
    color: #666;
    background-color: #fff;
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  