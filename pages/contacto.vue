<template>
  <section class="container mx-auto px-2 py-8 max-w-md">
    <h1 class="text-2xl font-bold mb-2 text-sky-900">Contactanos</h1>
    <p class="mb-4 text-gray-700 text-sm">
      Completa el formulario y un asesor te contactará para ayudarte a vender tu propiedad.
    </p>
    <form @submit.prevent="handleSubmit" class="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3">
      <div>
        <label class="block text-gray-700 font-semibold mb-1 text-sm">Nombre completo</label>
        <input v-model="form.name" type="text" required class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm" />
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-1 text-sm">Correo electrónico</label>
        <input v-model="form.email" type="email" required class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm" />
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-1 text-sm">Teléfono</label>
        <input v-model="form.phone" type="tel" required class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm" />
      </div>
      <div>
        <label class="block text-gray-700 font-semibold mb-1 text-sm">Mensaje adicional</label>
        <textarea v-model="form.message" rows="2" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm" placeholder="Cuéntanos más sobre tu propiedad..."></textarea>
      </div>
      <button type="submit" class="bg-gradient-to-r from-sky-600 to-blue-900 text-white font-semibold py-2 rounded-md hover:from-amber-600 hover:to-orange-700 transition-all duration-300 text-sm">
        Enviar solicitud
      </button>
      <p v-if="submitted" class="text-green-600 font-semibold mt-2 text-sm">¡Gracias! Hemos recibido tu información.</p>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  operation: '',
  address: '',
  message: ''
})

const submitted = ref(false)

async function handleSubmit() {
  submitted.value = false
  try {
    // Construir el mensaje para Tokko
    const message = `
Tipo de operación: ${form.value.operation}
Tipo de propiedad: ${form.value.propertyType}
Mensaje: ${form.value.message}
    `.trim()

    // Enviar a tu endpoint backend (que reenvía a Tokko)
    const response = await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        cellphone: form.value.phone,
        phone: form.value.phone,
        text: message,
        tags: ['jackiemoga.com', 'formulario web']
      })
    })

    // Log para depuración
    console.log('Status:', response.status)
    let data
    try {
      data = await response.json()
      console.log('Respuesta JSON:', data)
    } catch (e) {
      data = await response.text()
      console.log('Respuesta texto:', data)
    }

    if (response.ok) {
      submitted.value = true
      form.value = {
        name: '',
        email: '',
        phone: '',
        operation: '',
        propertyType: '',
        address: '',
        message: ''
      }
    } else {
      alert('Hubo un error al enviar tu mensaje.')
    }
  } catch (e) {
    alert('Hubo un error al enviar tu mensaje.')
  }
}
</script>