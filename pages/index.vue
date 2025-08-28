<template>

<HeroSection />

  <div class="bg-gray-200 py-3">
    <div class="text-center text-2xl font-bold text-gray-600 py-2">
      Propiedades destacadas
    </div>
    <div class="container mx-auto px-4 py-2">
      <!-- Loader -->
      <div v-if="pending" class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
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
        <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          <PropertyCard
            v-for="property in properties"
            :key="property.id"
            :property="property"
          />
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>

import HeroSection from '~/components/HeroSection.vue';
import PropertyCard from '~/components/PropertyCard.vue'

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

const { data, pending } = await useFetch('/api/properties');

const properties = computed(() =>
  (data.value?.objects
    ?.sort((a, b) => (b.operations?.[0]?.prices?.[0]?.price || 0) - (a.operations?.[0]?.prices?.[0]?.price || 0))
    .map(mapTokkoToPropertyCard) || []
  ).slice(0, 4)
);


</script>