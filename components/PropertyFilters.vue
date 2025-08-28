<template>

  <section :class="[bgClass, 'rounded-2xl md:p-6 mb-2 w-full', textClass]">
    <form @submit.prevent="applyFilters" class="flex flex-wrap gap-1 md:gap-6 items-end">
      <!-- Operación: COMPRAR, RENTAR, VENDER -->
      <div class="flex flex-col md:flex-row gap-1">
        <label class="text-xs font-medium mb-1 text-white"></label>
        <div class="flex gap-1">
          <button type="button" :class="[
            'px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200',
            !filters.operation
              ? 'bg-orange-400 text-white'
              : 'bg-transparent text-white-600 border border-white-600 hover:bg-white-50'
          ]" @click="filters.operation = null; applyFilters()">
            TODOS
          </button>
          <button type="button" :class="[
            'px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200',
            filters.operation === 'comprar'
              ? 'bg-orange-400 text-white'
              : 'bg-transparent text-white-600 border border-white-600 hover:bg-white-50'
          ]" @click="filters.operation = 'comprar'; applyFilters()">
            COMPRAR
          </button>
          <button type="button" :class="[
            'px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200',
            filters.operation === 'rentar'
              ? 'bg-orange-400 text-white'
              : 'bg-transparent text-white-600 border border-white-600 hover:bg-white-50'
          ]" @click="filters.operation = 'rentar'; applyFilters()">
            RENTAR
          </button>
          <NuxtLink to="/venda-con-nosotros" :class="[
            'px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200 flex items-center justify-center',
            filters.operation === 'vender'
              ? 'bg-orange-400 text-white'
              : 'bg-transparent text-white-600 border border-white-600 hover:bg-white-50'
          ]" @click.native="filters.operation = 'vender'">
            VENDER
          </NuxtLink>
        </div>
      </div>

      <!-- Location -->
      <div class="flex flex-col flex-1 min-w-[120px]">
        <label class="text-xs font-medium text-gray-700 mb-1"></label>
        <input v-model="filters.location" type="text" placeholder="Ciudad, Colonia, Código Postal"
          class="text-s p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      </div>

      <!-- Buttons -->
      <div class="flex gap-2 mt-4 md:mt-0">
        <button type="submit"
          class="bg-gradient-to-r from-sky-600 to-blue-900 text-white text-s px-8 py-2 rounded font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
          Buscar
        </button>

      </div>
    </form>
  </section>
</template>

<script setup>

const props = defineProps({
  bgClass: {
    type: String,
    default: 'bg-transparent'
  },
  textClass: {
    type: String,
    default: 'text-white'
  }
})

const emit = defineEmits(['filtersChanged'])


const filters = ref({
  type: 'all',
  priceMin: null,
  priceMax: null,
  bedrooms: null,
  bathrooms: null,
  location: null
})

const applyFilters = () => {
  emit('filtersChanged', { ...filters.value })
}

const clearFilters = () => {
  filters.value = {
    type: 'all',
    priceMin: null,
    priceMax: null,
    bedrooms: null,
    bathrooms: null,
    location: null
  }
  applyFilters()
}
</script>
