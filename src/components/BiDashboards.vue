<template>
    <div class="pdf-container">
      <h1>Project Documents</h1>
      <p>Explore my detailed project reports and documents. Click on the titles below to view or download the files.</p>
      <div class="pdf-list">
        <div v-for="pdf in pdfs" :key="pdf.name" class="pdf-item">
          <h2>{{ pdf.title }}</h2>
          <button @click="togglePdf(pdf.src)">View PDF</button>
          <div v-if="currentPdf === pdf.src" class="pdf-preview">
            <iframe :src="currentPdf" width="100%" height="600px" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BiDashboards',
    data() {
      return {
        pdfs: [
          { title: 'Students Mental Health Survey', src: '/pdfs/students-mental-health-survey.pdf' },
          { title: 'Coffee Sales Report', src: '/pdfs/Coffe-Sales.pdf' },
          // Add more PDFs as needed
        ],
        currentPdf: null,
      };
    },
    methods: {
      togglePdf(src) {
        this.currentPdf = this.currentPdf === src ? null : src;
      },
    },
  };
  </script>
  
  <style scoped>
  .pdf-container {
    padding: 40px;
    background: linear-gradient(135deg, #ffffff, #f9f9f9);
    color: #333;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .pdf-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .pdf-item {
    margin-bottom: 30px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
    text-align: left;
  }
  
  .pdf-item h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .pdf-item button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .pdf-item button:hover {
    background-color: #0056b3;
  }
  
  .pdf-preview {
    margin-top: 20px;
  }
  </style>
  