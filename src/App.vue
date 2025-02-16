<template>
  <div class="bg-[#111827] min-h-screen overflow-y-auto">
    <!-- Wrap components in Suspense to handle loading -->
    <Suspense>
      <template #default>
        <!-- Wrap all Components inside a single root element -->
        <div>
          <NavBar />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ExperienceAndSkills />
          <LatestProjSection />
          <ContactSection />
          <TestimonialsSection />
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue';
  // Import Components Asynchronously
  const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
  const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
  const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'));
  const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
  const TestimonialsSection = defineAsyncComponent(() => import('@/components/TestimonialsSection.vue'));
  const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'));
  const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'));
  const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
  const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
  const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));
  import loadingSpinner from './components/loadingSpinner.vue';
</script>

<style>
/* Apply styling for the entire page */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Custom scrollbars for webkit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 12px; /* Custom width for the scrollbar */
}

::-webkit-scrollbar-track {
  background-color: #2d3748; /* Darker track background */
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #4a5568; /* Dark thumb color */
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #718096; /* Lighter thumb color on hover */
}

/* Styling for the default background and minimum height */
.bg-[#111827] {
  background-color: #111827;
  min-height: 100vh;
}

/* Add some padding around the body content */
body {
  font-family: 'Arial', sans-serif;
  color: #f1f1f1;
  line-height: 1.6;
}

/* Centering content in the fallback state */
.fallback-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Enhanced spacing between sections */
section {
  margin-bottom: 4rem;
}

/* Add transitions for smooth layout changes */
.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
