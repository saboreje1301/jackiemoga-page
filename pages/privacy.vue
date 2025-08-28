<template>
  <section class="container mx-auto px-4 py-12 max-w-3xl">
    <h1 class="text-3xl font-bold mb-6 text-sky-900">Política de Privacidad</h1>
    <p class="mb-4 text-gray-700">
      En Jackie Moga Bienes Raíces, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">1. Información que recopilamos</h2>
    <ul class="list-disc ml-6 mb-4 text-gray-700">
      <li>Información de contacto (nombre, correo electrónico, teléfono).</li>
      <li>Información sobre propiedades de interés.</li>
      <li>Datos de navegación y uso del sitio web.</li>
    </ul>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">2. Uso de la información</h2>
    <ul class="list-disc ml-6 mb-4 text-gray-700">
      <li>Responder a tus consultas y solicitudes.</li>
      <li>Enviar información relevante sobre propiedades y servicios.</li>
      <li>Mejorar la experiencia de usuario en nuestro sitio.</li>
    </ul>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">3. Protección de datos</h2>
    <p class="mb-4 text-gray-700">
      Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados, alteraciones o divulgaciones.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">4. Compartir información</h2>
    <p class="mb-4 text-gray-700">
      No compartimos tu información personal con terceros, salvo que sea necesario para brindarte nuestros servicios o por requerimiento legal.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">5. Tus derechos</h2>
    <p class="mb-4 text-gray-700">
      Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento. Contáctanos a <a href="mailto:info@smaproperties.com" class="text-sky-700 underline">info@smaproperties.com</a>.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2 text-sky-800">6. Cambios a esta política</h2>
    <p class="mb-4 text-gray-700">
      Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier cambio será publicado en esta página.
    </p>

    <p class="mt-8 text-gray-500 text-sm">
      Última actualización: {{ currentYear }}
    </p>
  </section>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>