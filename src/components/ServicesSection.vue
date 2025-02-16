<template >
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">provide</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
            class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
            >
                <!-- Increased icon size -->
                <div class="mx-auto h-48 w-48 text-center xl:h-40 xl:w-40">
                    <div class="mx-auto h-full w-full">
                        <img :src="service.icon" alt="service icon" class="w-full h-full object-contain">
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: 'web_dev.jpg',
        name: 'WEB DEVELOPMENT',
        description: 'Frontend developer with React, Vue, and Next.js.'
    },
    {
        id: 2,
        icon: 'machinelearning.png',
        name: 'Machine Learning',
        description: 'I am a data analyst with Pandas, NumPy... feature engineer, develop model...'
    },
    {
        id: 3,
        icon: 'mobile.jpg',
        name: 'Mobile Development',
        description: 'I learned the basics of Flutter in order to build a fully responsive mobile app.'
    },
    {
        id: 4,
        icon: 'web_dev.jpg',
        name: 'WEB DEVELOPMENT',
        description: 'Backend developer with Node.js, Express.js, Next.js, Nest.js!'
    },
    {
        id: 5,
        icon: 'figma.png',
        name: 'Web Design',
        description: 'I am comfortable with Figma.'
    },
]);
</script>
