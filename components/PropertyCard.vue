<template>
  <NuxtLink :to="`/propiedades/${property.id}`" class="block h-full group">
    <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform group-hover:scale-[1.03]">
      <div v-if="property.images && property.images.length" class="relative h-48 w-full overflow-hidden">
        <img
          :src="property.images[activeImage].url"
          :alt="property.images[activeImage].alt || property.title"
          class="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <button
          v-if="property.images.length > 1"
          @click.stop.prevent="prevImage"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white"
        >
          ‹
        </button>
        <button
          v-if="property.images.length > 1"
          @click.stop.prevent="nextImage"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white"
        >
          ›
        </button>
        <div v-if="property.images.length > 1" class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          <span
            v-for="(img, i) in property.images"
            :key="i"
            :class="[
              'w-2 h-2 rounded-full',
              i === activeImage ? 'bg-orange-500' : 'bg-gray-300'
            ]"
          ></span>
        </div>
      </div>
      <div class="p-4 flex-1 flex flex-col">
        <span v-if="property.operation_type === 1">Venta</span>
        <span v-else-if="property.operation_type === 2">Renta</span>
        <h3 class="text-lg font-bold mb-2 text-gray-800">{{ property.title }}</h3>
        <p class="text-gray-600 text-sm mb-2">{{ property.location.address }}</p>
        <p class="text-gray-900 font-semibold mb-2" v-if="property.price">
          {{ property.price.toLocaleString('es-MX', { style: 'currency', currency: property.currency || 'MXN' }) }}
        </p>
        <p class="text-gray-700 text-xs mb-2" v-if="property.description">
          {{ property.description.slice(0, 80) }}<span v-if="property.description.length > 80">...</span>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})

const activeImage = ref(0)

function prevImage() {
  if (activeImage.value === 0) {
    activeImage.value = props.property.images.length - 1
  } else {
    activeImage.value--
  }
}

function nextImage() {
  if (activeImage.value === props.property.images.length - 1) {
    activeImage.value = 0
  } else {
    activeImage.value++
  }
}
</script>