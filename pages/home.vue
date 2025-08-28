<template>

<HeroSection />

<div class="grid md:grid-cols-3 xl:grid-cols-5 gap-4">
  <div v-for="i in 10" :key="i" class="bg-red-300 h-20">{{ i }}</div>
</div>

  <section class="container mx-auto py-12">
    <div v-if="pending" class="text-center py-10">Cargando propiedades...</div>
    <div v-else class="grid md:grid-cols-3 gap-8">
      <PropertyCard
        v-for="property in properties"
        :key="property.id"
        :property="property"
      />
    </div>
  </section>


</template>

<script setup>

import HeroSection from '~/components/HeroSection.vue';
import PropertyCard from '~/components/PropertyCard.vue';

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
  data.value?.objects?.map(mapTokkoToPropertyCard) || []
);

</script>