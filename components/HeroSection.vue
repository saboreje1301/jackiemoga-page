<!-- components/HeroSection.vue -->
<template>
  <section class="relative min-h-screen flex justify-center overflow-hidden">
    <!-- Background Video/Image -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
      <img 
        src="~/assets/images/terraza.webp" 
        alt="San Miguel de Allende" 
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="relative container mx-auto px-3 text-center">

        <PropertyFilters />


            <div class="max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/20">
          <Icon name="mdi:star" class="w-4 h-4 text-amber-400" />
          <span class="text-white text-sm font-medium">Premium Real Estate in Mexico</span>
        </div>
    

        <!-- Main Headline -->
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Find Your 
          <span class="bg-gradient-to-r from-sky-600 to-indigo-800 bg-clip-text text-transparent">
            Dream Home
          </span>
          <br />
          in San Miguel
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
          Discover luxury properties in Mexico's most enchanting colonial city. 
          From historic homes to modern villas, find your perfect sanctuary.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 p-6">
          <NuxtLink 
            to="/propiedades"
            class="group bg-gradient-to-r from-sky-600 to-blue-900 text-white px-8 py-6 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center space-x-2"
          >
            <span>Explorar Propiedades</span>
            <Icon name="mdi:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
          
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto p-6">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-1">
              {{ stat.value }}
            </div>
            <div class="text-gray-300 text-sm uppercase tracking-wider">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>


    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div class="animate-bounce">
        <Icon name="mdi:chevron-down" class="w-8 h-8 text-white/70" />
      </div>
    </div>

    <!-- Video Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-show="videoModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" @click="closeVideoModal">
          <div class="relative max-w-4xl w-full aspect-video bg-black rounded-2xl overflow-hidden" @click.stop>
            <button 
              @click="closeVideoModal"
              class="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <Icon name="mdi:close" class="w-6 h-6" />
            </button>
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              class="w-full h-full"
              frameborder="0" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
const videoModalOpen = ref(false)

const stats = [
  { value: '100+', label: 'Propiedades' },
  { value: '12+', label: 'Años de Experiencia' },
  { value: '98%', label: 'Satisfacci´ón de Cliente' },
  { value: '24/7', label: 'Asistencia' }
]

const openVideoModal = () => {
  videoModalOpen.value = true
}

const closeVideoModal = () => {
  videoModalOpen.value = false
}
</script>