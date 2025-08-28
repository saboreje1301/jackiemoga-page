<template>
  <div class="container mx-auto p-4 md:p-8">
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
      Conoce a Nuestros Expertos en Bienes Raíces
    </h1>

    <div class="bg-white rounded-lg shadow-xl overflow-hidden md:flex md:max-w-4xl mx-auto mb-16">
      <div class="md:flex-shrink-0">
        <NuxtImg
          src="/images/jackie-moga-profile.jpg"
          alt="Jackie Moga, Agente de Bienes Raíces en San Miguel de Allende"
          class="h-80 w-full object-cover md:w-64 md:h-full"
          quality="80"
          sizes="sm:100vw md:33vw"
        />
      </div>

      <div class="p-6 md:p-8 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Jackie Moga</h2>
        <p class="text-xl text-orange-600 font-semibold mb-4">
          Fundadora y Experta Inmobiliaria en San Miguel de Allende
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          Con **más de 15 años de experiencia** en el vibrante mercado inmobiliario de San Miguel de Allende,
          Jackie Moga es una figura reconocida y de confianza para quienes buscan comprar, vender o invertir en esta ciudad mágica.
          Su profundo conocimiento del mercado local, su ojo para el detalle y su pasión por conectar a las personas con su hogar ideal
          la distinguen como una líder en el sector.
        </p>
        <p class="text-gray-700 leading-relaxed mb-6">
          Jackie se especializa en propiedades coloniales históricas, villas de lujo y terrenos con vistas panorámicas.
          Su compromiso va más allá de una simple transacción; ella se dedica a entender las necesidades de sus clientes
          para ofrecer una experiencia personalizada y sin igual.
        </p>

        <div class="text-gray-800 text-lg">
          <p class="flex items-center mb-2">
            <svg class="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            <a href="tel:+524151234567" class="hover:underline">+52 415 123 4567</a>
          </p>
          <p class="flex items-center mb-2">
            <svg class="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            <a href="mailto:jackie.moga@tudominio.com" class="hover:underline">jackie.moga@tudominio.com</a>
          </p>
          <p class="flex items-center">
            <svg class="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm.707 3.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L9 9.414V14a1 1 0 102 0V9.414l2.293 2.293a1 1 0 001.414-1.414l-4-4z" clip-rule="evenodd"></path></svg>
            <a href="#" class="hover:underline">jackiemoga.com</a>
          </p>
        </div>
      </div>
    </div>

    </div>
</template>

<script setup>
// Aquí podrías cargar datos de agentes desde una API si tuvieras más de uno
// Por ahora, toda la información está directamente en el template.

// Configura el meta para la página, útil para SEO
useHead({
  title: 'Nuestros Agentes | Jackie Moga Real Estate',
  meta: [
    { name: 'description', content: 'Conoce a Jackie Moga, fundadora y experta inmobiliaria en San Miguel de Allende. Tu guía confiable en bienes raíces.' }
  ],
});
</script>

<style scoped>
/* No hay estilos personalizados aquí, todo se maneja con Tailwind CSS */
</style>