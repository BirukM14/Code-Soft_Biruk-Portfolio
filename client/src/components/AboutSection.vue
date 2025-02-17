<template >
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8">My Education</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                    class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
                    >
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">More
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</span>
                    Me
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8">Hi, I'm Biruk Merawi, a dedicated full-stack web developer with a passion for 
                    creating seamless digital experiences. I work with modern frontend frameworks like Vue.js, React, and Next.js, while 
                    also building powerful backend systems using Node.js, Express.js, Nest.js, and Go (Golang). My interest extends beyond web 
                    development into the world of machine learning, where I apply data analysis techniques and model development. 
                    I’ve also explored Flutter to craft responsive mobile applications. I thrive on solving complex problems, optimizing 
                    performance, and continuously expanding my skill set to build innovative, user-friendly solutions
                </p>
                <div class="flex justify-between max-w-lg pt-8">
    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3 w-1/2 mx-2">
        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+30</h3>
        <p class="text-sm sm:text-base text-gray-300">Projects</p>
    </div>

    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3 w-1/2 mx-2">
        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+3</h3>
        <p class="text-sm sm:text-base text-gray-300">Years Experience</p>
    </div>
</div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education=ref([
    {
        id:1,
        School:'Addis Ababa University',
        program:'Computer Engineer',
        year:'2025'
    },
    {
        id:2,
        School:'Self Taught',
        program:'Software Engineer',
        year:'2021'
    }
])
</script>
