<template>
  <!-- Your form template stays the same, just add the @submit.prevent -->
  <form @submit.prevent="sendMessage" class="flex flex-col p-2" data-aos="zoom-in-up">
    <div class="mb-6">
      <label for="name" class="text-white block mb-2 text-sm font-medium">Name</label>
      <input v-model="name" type="text" id="name" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Your name" required />
    </div>
    
    <div class="mb-6">
      <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
      <input v-model="email" type="email" id="email" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="email@gmail.com" required />
    </div>

    <div class="mb-6">
      <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
      <input v-model="subject" type="text" id="subject" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Subject" required />
    </div>

    <div class="mb-6">
      <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
      <textarea v-model="message" id="message" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Your message" required></textarea>
    </div>

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
      name: '',      // User's name
      email: '',     // User's email
      subject: '',   // Subject of the message
      message: '',   // Message content
    };
  },
  methods: {
    async sendMessage() {
      try {
        const response = await axios.post('http://localhost:5000/api/contact/send-message', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        });

        if (response.status === 200) {
          alert('Message sent successfully');
        } else {
          alert('Failed to send message');
        }
      } catch (error) {
        console.error('Error occurred:', error);
        alert('Error occurred while sending the message');
      }
    },
  },
};
</script>
