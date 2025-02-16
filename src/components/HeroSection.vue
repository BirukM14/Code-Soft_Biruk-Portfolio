<template>
    <section class="relative w-full bg-gray-900 py-16" data-aos="fade-up">
        <div class="w-full px-6 sm:px-12 md:px-16 lg:px-20 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-12 xl:gap-16 relative pt-12 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-8 text-center lg:text-left">
                    <h1 class="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Hey there, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Biruk Merawi</span> 👋
                    </h1>
                    <p class="text-gray-300 pt-6 text-lg leading-relaxed max-w-xl">
                        I specialize in full-stack web development, creating dynamic and responsive web applications.
                        Proficient in frontend frameworks like Vue.js and React, alongside backend expertise in Node.js,
                        Express.js, Next.js and Go (Golang). Passionate about integrating AI and machine learning into web solutions. and some basics on flutter.
                    </p>
                    <div class="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform">
                            Hire Me
                        </button>
                        <a href="/bkcv.pdf" download="resume.pdf" class="border border-blue-500 px-6 py-3 rounded-full text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition-colors">
                            Download Resume
                        </a>
                    </div>
                </div>
                <div class="lg:h-full md:flex justify-center">
                    <div class="relative w-64 h-64 lg:w-80 lg:h-80">
                        <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-30 blur-3xl rounded-full"></div>
                        <img src="@/assets/bura.jpg" alt="Profile" class="relative w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-lg">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>
