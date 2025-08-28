<template>
  <div>
    <MenuBar />
    <main>
      <slot />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import MenuBar from '~/components/layout/MenuBar.vue'
import FooterSection from '~/components/layout/FooterSection.vue'
</script>