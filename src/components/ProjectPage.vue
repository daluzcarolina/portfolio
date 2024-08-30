<template>
  <div class="projects-viewer">
    <h1>My Python Notebooks</h1>
    <p>Explore my Python notebooks and see detailed analyses and visualizations. Click on the links below to view each notebook.</p>
    <ul class="notebook-list">
      <li>
        <a href="/notebook/notebook4c9d266b2a.ipynb" target="_blank" class="btn">View Notebook 1</a>
      </li>
      <li>
        <a href="/notebook/notebookd5d35032bd.ipynb" target="_blank" class="btn">View Notebook 2</a>
      </li>
      <li>
        <a href="/notebook/cost-of-living-by-country.ipynb" target="_blank" class="btn">View Notebook 3</a>
      </li>
      <li>
        <a href="/notebook/estudo-de-imc-de-atletas-das-olimp-adas.ipynb" target="_blank" class="btn">View Notebook 4</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.projects-viewer {
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, #f5f5f5, #ffffff);
  color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #444;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

.notebook-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.notebook-list li {
  margin: 15px 0;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  font-size: 1rem;
  font-weight: 600;
}

.btn:hover {
  background: linear-gradient(135deg, #0056b3, #003d79);
  transform: scale(1.05);
}

.btn:active {
  background: linear-gradient(135deg, #003d79, #00264d);
  transform: scale(1.02);
}
</style>
