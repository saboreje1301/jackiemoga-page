<template>

  <div class="min-h-screen bg-gray-100">

    <div class="relative container mx-auto text-center rounded-lg shadow-lg">
    <PropertyFilters
  bgClass="bg-gray-100"
  textClass="text-gray-800"
  @filtersChanged="onFiltersChanged"
/>
    </div>
      
    <div class="container mx-auto px-4 py-8">
      <!-- Loader -->
      <div v-if="pending" class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div
          v-for="i in 10"
          :key="i"
          class="bg-white rounded-xl shadow-md overflow-hidden animate-pulse h-80"
        >
          <div class="h-40 bg-gray-300"></div>
          <div class="p-4">
            <div class="h-5 bg-gray-300 rounded mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Properties Grid -->
      <div v-else>
        <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
<NuxtLink
  v-for="property in properties"
  :key="property.id"
  :to="`/propiedades/${property.id}`"
  class="block cursor-pointer"
>
  <PropertyCard :property="property" />
</NuxtLink>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import PropertyFilters from '~/components/PropertyFilters.vue'
import PropertyCard from '~/components/PropertyCard.vue'

const { data, pending } = await useFetch('/api/properties')

const filters = ref({
  operation: null,
  location: null
})

function onFiltersChanged(newFilters) {
  filters.value = { ...filters.value, ...newFilters }
}

// Transforma el objeto de la API al formato que espera PropertyCard
function mapTokkoToPropertyCard(obj) {
  return {
    id: obj.id,
    title: obj.publication_title || obj.address,
    description: obj.description,
    price: obj.operations?.[0]?.prices?.[0]?.price || null,
    currency: obj.operations?.[0]?.prices?.[0]?.currency || 'MXN',
    operation_type: obj.operations?.[0]?.operation_id || null,
    location: {
      address: obj.address || obj.real_address || obj.location?.full_location || ''
    },
    images: obj.photos?.map(photo => ({
      url: photo.image,
      alt: obj.publication_title || obj.address
    })) || []
  }
}

// Aplica los filtros a las propiedades
const properties = computed(() => {
  let list = data.value?.objects?.map(mapTokkoToPropertyCard) || []
  if (filters.value.operation) {
    list = list.filter(p =>
      (filters.value.operation === 'comprar' && p.operation_type === 1) ||
      (filters.value.operation === 'rentar' && p.operation_type === 2)
    )
  }
  if (filters.value.location) {
    list = list.filter(p =>
      p.location.address?.toLowerCase().includes(filters.value.location.toLowerCase())
    )
  }
  return list
})

</script>