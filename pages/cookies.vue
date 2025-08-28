<template>
  <section class="container mx-auto px-4 py-12 max-w-3xl">
    <h1 class="text-3xl font-bold mb-6 text-sky-900">Política de Cookies</h1>
    <p class="mb-4 text-gray-700">
      En Jackie Moga Bienes Raíces utilizamos cookies para mejorar tu experiencia en nuestro sitio web. A continuación, te explicamos qué son las cookies, cómo las usamos y cómo puedes gestionarlas.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">1. ¿Qué son las cookies?</h2>
    <p class="mb-4 text-gray-700">
      Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y mejorar la funcionalidad del sitio.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">2. ¿Qué tipos de cookies utilizamos?</h2>
    <ul class="list-disc ml-6 mb-4 text-gray-700">
      <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio.</li>
      <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo los usuarios interactúan con el sitio para mejorar nuestros servicios.</li>
      <li><strong>Cookies de preferencias:</strong> Permiten recordar tus configuraciones y preferencias.</li>
    </ul>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">3. ¿Cómo puedes gestionar las cookies?</h2>
    <p class="mb-4 text-gray-700">
      Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminarlas en cualquier momento. Ten en cuenta que deshabilitar cookies puede afectar el funcionamiento del sitio.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">4. Cambios en la política de cookies</h2>
    <p class="mb-4 text-gray-700">
      Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. Los cambios serán publicados en esta página.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">5. Contacto</h2>
    <p class="mb-4 text-gray-700">
      Si tienes preguntas sobre nuestra política de cookies, contáctanos en <a href="mailto:info@smaproperties.com" class="text-sky-700 underline">info@smaproperties.com</a>.
    </p>

    <p class="mt-8 text-gray-500 text-sm">
      Última actualización: {{ currentYear }}
    </p>
  </section>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>