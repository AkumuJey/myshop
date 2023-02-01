<template>
  <div>
    <div class="grid grid-cols-5 gap-5">
      <div v-for="product in products" :key="product.id">
        <nuxt-link :to="`/products/${product.id}`">{{ product.title }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})


const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style>

</style>