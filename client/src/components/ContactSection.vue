<template>
    <!-- Your form template stays the same, just add the @submit.prevent -->
    <form @submit.prevent="sendMessage" class="flex flex-col p-2" data-aos="zoom-in-up">
      <!-- form fields here -->
      <button type="submit" class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent">
        Send Message
      </button>
    </form>
  </template>
  
  <script>
  import axios from 'axios'; // Import axios to handle HTTP requests
  
  export default {
    data() {
      return {
        email: '',
        subject: '',
        message: '',
      };
    },
    methods: {
      async sendMessage() {
        const formData = {
          email: this.email,
          subject: this.subject,
          message: this.message,
        };
  
        try {
          const response = await axios.post('http://localhost:5000/send-email', formData);
          alert('Message sent successfully!');
          this.email = '';
          this.subject = '';
          this.message = '';
        } catch (error) {
          alert('Failed to send message, please try again.');
        }
      },
    },
  };
  </script>
  