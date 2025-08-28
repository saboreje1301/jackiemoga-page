<template>
  <footer class="bg-sky-950 text-white">
    <!-- Main Footer -->
    <div class="w-full px-4 py-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Icon name="mdi:home-city" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold">Jackie Moga Bienes Raices</h3>
              <p class="text-sm text-gray-400">San Miguel de Allende</p>
            </div>
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Tu socio de confianza para encontrar la propiedad perfecta en San Miguel de Allende. 
            Experimenta la vida de lujo en la ciudad colonial más hermosa de México.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
              <Icon name="mdi:facebook" class="w-5 h-5" />
            </a>
            <a href="#" class="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
              <Icon name="mdi:instagram" class="w-5 h-5" />
            </a>
            <a href="#" class="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
              <Icon name="mdi:twitter" class="w-5 h-5" />
            </a>
            <a href="#" class="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
              <Icon name="mdi:youtube" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink 
                :to="link.path" 
                class="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-2"
              >
                <Icon :name="link.icon" class="w-4 h-4" />
                <span>{{ link.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>


        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Contacto</h4>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <Icon name="mdi:map-marker" class="w-5 h-5 text-amber-400 mt-1" />
              <div>
                <p class="text-gray-300">Centro Histórico</p>
                <p class="text-gray-300">San Miguel de Allende, GTO</p>
                <p class="text-gray-300">México 37700</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <Icon name="mdi:phone" class="w-5 h-5 text-amber-400" />
              <a href="tel:+524151234567" class="text-gray-300 hover:text-amber-400 transition-colors">
                +52 415 123 4567
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <Icon name="mdi:email" class="w-5 h-5 text-amber-400" />
              <a href="mailto:info@smaproperties.com" class="text-gray-300 hover:text-amber-400 transition-colors">
                info@smaproperties.com
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Newsletter -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-2xl mx-auto text-center">
          <h4 class="text-xl font-semibold mb-4">Recibe las Mejores Propiedades Primero</h4>
          <p class="text-gray-300 mb-6">Sé el primero en descubrir las nuevas propiedades y obtén análisis exclusivos del mercado, directamente en tu email</p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              v-model="email"
              type="email" 
              placeholder="Ingrese su correo electrónico"
              class="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              required
            />
            <button 
              type="submit"
              class="bg-gradient-to-r from-sky-600 to-blue-900 text-white px-6 py-3 rounded-full font-medium hover:from-amber-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap"
            >
              Suscribete
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ currentYear }} SMA Properties. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/cookies" class="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Cookie Policy
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const email = ref('')
const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Inicio', path: '/', icon: 'mdi:home' },
  { name: 'Propiedades', path: '/propiedades', icon: 'mdi:home-search' },
  { name: 'Contacto', path: '/contacto', icon: 'mdi:phone' }
]

const subscribeNewsletter = () => {
  // Handle newsletter subscription
  console.log('Subscribing email:', email.value)
  // Add your newsletter logic here
  email.value = ''
  // Show success message
}
</script>