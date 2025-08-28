<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center py-8 px-2">
    <div class="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-0 md:p-10 relative overflow-hidden">
      <!-- Botón de regreso -->
      <NuxtLink
        to="/propiedades"
        class="absolute left-4 top-4 z-20 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-sm text-blue-800 font-semibold shadow-xl ring-1 ring-blue-100/50
               hover:bg-blue-50 hover:text-blue-700 hover:ring-blue-200
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white
               transition-all duration-300 ease-in-out"
      >
        <Icon name="mdi:arrow-left" class="w-5 h-5" />
        <span class="tracking-wide text-sm md:text-base">Volver a propiedades</span>
      </NuxtLink>

      <!-- Loader -->
      <div v-if="pending" class="flex flex-col items-center justify-center py-24">
        <Icon name="mdi:loading" class="animate-spin w-8 h-8 text-orange-400 mb-2" />
        <span class="text-gray-500 text-xl">Cargando propiedad...</span>
      </div>

      <!-- Error -->
      <div v-else-if="!property" class="flex flex-col items-center justify-center py-24">
        <Icon name="mdi:alert-circle-outline" class="w-8 h-8 text-red-400 mb-2" />
        <span class="text-red-500 text-xl">Propiedad no encontrada.</span>
      </div>

      <!-- Detalle -->
      <div v-else class="gap-8 min-h-[32rem]">
        <!-- Carrusel de imágenes a la izquierda -->
        <div class="flex flex-col justify-center">
          <div v-if="property.images.length" class="relative w-full">
            <img
              :src="property.images[activeImage].url"
              :alt="property.images[activeImage].alt"
              class="rounded-xl w-full h-96 object-cover border border-gray-200 shadow transition-all duration-300"
            />
            <!-- Flechas -->
            <button
              v-if="property.images.length > 1"
              @click.stop.prevent="prevImage"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow opacity-80 hover:opacity-100 transition"
              aria-label="Anterior"
            >
              <Icon name="mdi:chevron-left" class="w-6 h-6 text-gray-700" />
            </button>
            <button
              v-if="property.images.length > 1"
              @click.stop.prevent="nextImage"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow opacity-80 hover:opacity-100 transition"
              aria-label="Siguiente"
            >
              <Icon name="mdi:chevron-right" class="w-6 h-6 text-gray-700" />
            </button>
            <!-- Indicadores -->
            <div v-if="property.images.length > 1" class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              <span
                v-for="(img, i) in property.images"
                :key="i"
                :class="[
                  'w-2 h-2 rounded-full transition',
                  i === activeImage ? 'bg-orange-500 scale-125' : 'bg-gray-300'
                ]"
              ></span>
            </div>
          </div>
          <div v-else class="flex items-center justify-center h-80 text-gray-400 w-full">
            <Icon name="mdi:image-off-outline" class="w-16 h-16" />
            <span class="ml-2">Sin imágenes</span>
          </div>
        </div>

        <!-- Detalles a la derecha -->
        

            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h1 class="text-3xl font-extrabold text-sky-900 mb-1 leading-tight">{{ property.title }}</h1>
              <span
                v-if="property.operation_type === 1"
                class="bg-orange-400 text-white px-4 py-1 rounded-full text-xs font-semibold shadow"
              >Venta</span>
              <span
                v-else-if="property.operation_type === 2"
                class="bg-blue-400 text-white px-4 py-1 rounded-full text-xs font-semibold shadow"
              >Renta</span>
            </div>
            <p class="text-gray-600 mb-2 text-base flex items-center gap-2">
              <Icon name="mdi:map-marker" class="w-5 h-5 text-orange-400" />
              {{ property.location.address }}
            </p>


<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div class="md:col-span-2 flex items-center gap-2 mb-4">
      <span class="text-2xl font-bold text-orange-600 drop-shadow">
        {{ property.price.toLocaleString('es-MX', { style: 'currency', currency: property.currency }) }}
      </span>
    </div>
    <div class="mb-6">
      <h2 class="text-lg font-semibold text-sky-800 mb-1">Descripción</h2>
      <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ property.description }}</p>
      <div class="mb-6">
  <h2 class="text-lg font-semibold text-sky-800 mb-1">Descripción</h2>
  <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ property.description }}</p>
<div class="mt-4 rounded-xl overflow-hidden shadow" style="height: 300px;">
  <!-- Mapa por coordenadas -->
  <iframe
    v-if="property.location.lat && property.location.lng"
    :src="`https://www.google.com/maps?q=${property.location.lat},${property.location.lng}&output=embed`"
    width="100%"
    height="300"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />
  <!-- Mapa por dirección (fallback) -->
  <iframe
    v-else-if="property.location.address"
    :src="`https://www.google.com/maps?q=${encodeURIComponent(property.location.address)}&output=embed`"
    width="100%"
    height="300"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />
  <!-- Si no hay nada, puedes mostrar un mensaje opcional -->
  <div v-else class="flex items-center justify-center h-full text-gray-400">
    <Icon name="mdi:map-marker-off" class="w-8 h-8" />
    <span class="ml-2">Ubicación no disponible</span>
  </div>
</div>
</div>
    </div>

  <!-- Columna detalles (1/3 en escritorio) -->
  <div class="md:col-span-1">
    <h1 class="text-xl font-bold mb-2 text-sky-900 text-center">¡Contáctanos!</h1>
    <p class="mb-3 text-gray-700 text-xs text-center">
      Completa el formulario para contactarte por la propiedad que te interesa.
    </p>
    <form @submit.prevent="handleSubmit" class="bg-white rounded-xl shadow-lg p-3 flex flex-col gap-2">
      <div>
        <label class="block text-gray-700 font-semibold mb-0.5 text-xs">Nombre completo</label>
        <input v-model="form.name" type="text" required class="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400 text-xs" />
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-0.5 text-xs">Correo electrónico</label>
        <input v-model="form.email" type="email" required class="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400 text-xs" />
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-0.5 text-xs">Teléfono</label>
        <input v-model="form.phone" type="tel" required class="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400 text-xs" />
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-0.5 text-xs">ID de Propiedad (opcional)</label>
        <input v-model="form.propertyId" type="text" class="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400 text-xs" placeholder="Ej: PR00123" />
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-0.5 text-xs">Mensaje adicional (opcional)</label>
        <textarea v-model="form.message" rows="2" class="w-full border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400 text-xs" placeholder="Cuéntanos más sobre tu propiedad o tu interés..."></textarea>
      </div>
      <button type="submit" class="bg-gradient-to-r from-sky-600 to-blue-900 text-white font-semibold py-2 rounded-md hover:from-amber-600 hover:to-orange-700 transition-all duration-300 text-sm">
        Enviar Solicitud
      </button>
      <p v-if="submitted" class="text-green-600 font-semibold mt-1 text-xs text-center">¡Gracias! Hemos recibido tu información.</p>
    </form>
  </div>
</div>
          </div>
        </div>
      </div>


</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const id = route.params.id

const { data, pending, error } = await useFetch(`/api/properties/${id}`)

const property = computed(() => {
  if (!data.value) return null
  const obj = data.value
  return {
    id: obj.id,
    title: obj.publication_title || obj.address,
    description: obj.description,
    price: obj.operations?.[0]?.prices?.[0]?.price || null,
    currency: obj.operations?.[0]?.prices?.[0]?.currency || 'MXN',
    operation_type: obj.operations?.[0]?.operation_id || null,
    location: {
      address: obj.address || obj.real_address || obj.location?.full_location || '',
      lat: obj.location?.geo_lat ? Number(obj.location.geo_lat) : null,
      lng: obj.location?.geo_long ? Number(obj.location.geo_long) : null
    },
    images: obj.photos?.map(photo => ({
      url: photo.image,
      alt: obj.publication_title || obj.address
    })) || []
  }
})

// Carrusel simple
const activeImage = ref(0)
function prevImage() {
  if (!property.value?.images?.length) return
  activeImage.value = (activeImage.value - 1 + property.value.images.length) % property.value.images.length
}
function nextImage() {
  if (!property.value?.images?.length) return
  activeImage.value = (activeImage.value + 1) % property.value.images.length
}

// --------- AGREGA ESTO PARA EL FORMULARIO ---------
const form = ref({
  name: '',
  email: '',
  phone: '',
  propertyId: '',
  message: ''
})
const submitted = ref(false)

async function handleSubmit() {
  submitted.value = false
  try {
    // Construye el mensaje
    const message = `
ID de Propiedad: ${property.value?.id || form.value.propertyId}
Mensaje: ${form.value.message}
    `.trim()

    // Envía al backend
    const response = await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        text: message,
        tags: ['jackiemoga.com', 'formulario propiedad'],
        properties: property.value?.id ? [property.value.id] : undefined,
        lat: property.value.location.lat,
        lng: property.value.location.lng
      })
    })

    if (response.ok) {
      submitted.value = true
      form.value = { name: '', email: '', phone: '', propertyId: '', message: '' }
    } else {
      alert('Hubo un error al enviar tu mensaje.')
    }
  } catch (e) {
    alert('Hubo un error al enviar tu mensaje.')
  }
}
</script>