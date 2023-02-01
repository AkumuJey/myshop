<template>
  <div>
    <p>Products for {{ id }}</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nobis culpa provident ut. Ex illo, doloremque voluptatum consectetur itaque aliquam!</p>
    <p>{{ $route.params.id }} mmm</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>