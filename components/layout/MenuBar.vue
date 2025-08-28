<template>
  <nav class="bg-gray-100 shadow-lg w-full z-50 top-0">
    
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
<a
  href="/"
  v-show="!isMobileMenuOpen"
  class="flex items-center"
>
<img src="/logo.webp" alt="Jackie Moga Real Estate" width="240" height="90" class="h-24 w-auto" draggable="false" />
</a>

    <div v-if="isMobileMenuOpen" class="md:flex bg-white shadow-md py-2">
      <div class="px-4 py-2">
        <a href="/propiedades" class="block text-gray-700 hover:text-orange-500 py-2 transition-colors duration-300">Propiedades</a>
        <a href="/agentes" class="block text-gray-700 hover:text-orange-500 py-2 transition-colors duration-300">Agentes</a>
        <a href="/historias" class="block text-gray-700 hover:text-orange-500 py-2 transition-colors duration-300">Historias</a>
        <a
          href="/venda-con-nosotros"
          class="block bg-gradient-to-r from-blue-900 to-blue-600 hover:bg-orange-600 bg-clip-text text-transparent font-semibold py-2 px-4 rounded-full transition-colors duration-300 mt-2"
        >
          Venda con nosotros
        </a>
        <select class="border border-gray-300 rounded-md py-1 px-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mt-2 w-full">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </div>
    
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-gray-600 hover:text-orange-500 focus:outline-none focus:shadow-outline-orange">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            <path v-if="isMobileMenuOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.707 4.293a1 1 0 0 0-1.414-1.414L12 10.586 6.707 4.293a1 1 0 0 0-1.414 1.414L10.586 12 4.293 17.293a1 1 0 0 0 1.414 1.414L12 13.414 17.293 19.707a1 1 0 0 0 1.414-1.414L13.414 12 19.707 5.707z" />
          </svg>
        </button>
      </div>

      <div class="max-md:hidden items-center space-x-4">
        <a href="/propiedades" class="text-gray-700 hover:text-orange-500 transition-colors duration-300">Propiedades</a>
        <a href="/agentes" class="text-gray-700 hover:text-orange-500 transition-colors duration-300">Agentes</a>
        <a href="/historias" class="text-gray-700 hover:text-orange-500 transition-colors duration-300">Historias</a>
        <a
          href="/venda-con-nosotros"
          class="bg-gradient-to-r from-blue-900 to-blue-600 hover:bg-orange-600 bg-clip-text text-transparent py-2 px-4 rounded-full transition-colors duration-300"
        >
          Venda con nosotros
        </a>
        <select class="border border-gray-300 rounded-md py-1 px-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </div>


  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

