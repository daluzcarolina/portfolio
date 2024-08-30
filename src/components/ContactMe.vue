<template>
    <div class="contact">
      <h1>Contact Me</h1>
      <p>
        I'm here to assist with any inquiries or discuss potential projects. Feel free to reach out to me via email or WhatsApp for quotes or to start a conversation. I look forward to connecting with you!
      </p>
      <div class="contact-links">
        <a :href="`mailto:${email}`" class="contact-link">
          <i class="fas fa-envelope"></i> Email Me
        </a>
        <a :href="`https://wa.me/${phone}`" class="contact-link">
          <i class="fab fa-whatsapp"></i> Message on WhatsApp
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        email: 'carolinaluz97@gmail.com',
        phone: '5561981226157'  // Remove the '+' for WhatsApp link compatibility
      };
    }
  }
  </script>
  
  <style scoped>
  .contact {
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
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    color: #555;
  }
  
  .contact-links {
    margin-top: 20px;
  }
  
  .contact-link {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .contact-link i {
    margin-right: 8px;
  }
  
  .contact-link:hover {
    background-color: #0056b3;
  }
  </style>
  