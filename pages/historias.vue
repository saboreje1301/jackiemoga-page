<template>
  <section class="container mx-auto px-4 py-12 max-w-5xl">
    <h1 class="text-4xl font-extrabold text-sky-900 mb-4 text-center">Historias que Inspiran</h1>
    <p class="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
      Descubre cómo Jackie Moga Real Estate ha transformado sueños en hogares y proyectos en realidades. Estas son algunas de las historias de nuestros clientes y su experiencia con nosotros.
    </p>

    <div class="grid gap-8 md:grid-cols-2">
      <div
        v-for="story in stories"
        :key="story.id"
        class="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6 hover:scale-[1.03] transition-transform duration-300"
      >
        <img
          :src="story.image"
          :alt="story.name"
          class="w-28 h-28 rounded-full object-cover border-4 border-sky-200 shadow-md"
        />
        <div>
          <h2 class="text-xl font-bold text-sky-800 mb-1">{{ story.title }}</h2>
          <p class="text-gray-700 mb-2 italic">"{{ story.quote }}"</p>
          <div class="flex items-center gap-2">
            <span class="font-semibold text-sky-700">{{ story.name }}</span>
            <span class="text-gray-400 text-xs">| {{ story.location }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 text-center">
      <h3 class="text-2xl font-bold text-sky-900 mb-2">¿Quieres compartir tu historia?</h3>
      <p class="text-gray-600 mb-4">Envíanos tu experiencia y forma parte de nuestra comunidad de sueños cumplidos.</p>
      <NuxtLink
        to="/venda-con-nosotros"
        class="inline-block bg-gradient-to-r from-sky-600 to-blue-900 text-white font-semibold px-6 py-3 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
      >
        ¡Comparte tu historia!
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const stories = [
  {
    id: 1,
    name: 'Guadalupe Hernández',
    location: 'San Miguel de Allende',
    title: 'Un hogar para mi familia',
    quote:
      'Gracias a Jackie Moga encontré el espacio ideal para mi familia. Nos acompañaron en todo momento y ahora disfrutamos de nuestro nuevo hogar.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&h=256&facepad=2'
  },
  {
    id: 2,
    name: 'José Luis Martínez',
    location: 'Querétaro',
    title: 'Mi primer terreno',
    quote:
      'El equipo me ayudó a invertir en mi primer terreno. Todo fue claro y seguro, y ahora tengo un patrimonio para el futuro.',
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=256&h=256&fit=crop'
  },
  {
    id: 3,
    name: 'Mariana y Pablo Gómez',
    location: 'CDMX',
    title: 'De departamento a casa',
    quote:
      'Vendimos nuestro departamento y compramos una casa en San Miguel. El proceso fue sencillo y siempre nos sentimos respaldados.',
    image: 'https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&w=256&h=256&fit=crop'
  },
  {
    id: 4,
    name: 'Sofía Ramírez',
    location: 'Guanajuato',
    title: 'Confianza y cercanía',
    quote:
      'Desde el primer contacto sentí confianza. Recomiendo ampliamente a Jackie Moga Real Estate por su profesionalismo y calidez.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=256&h=256&fit=crop'
  }
]
</script>