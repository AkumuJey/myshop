<template>
  <div>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-5">
      <div v-for="product in products" :key="product.id">
        <TheProductCard :product ='product'/>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'My Shop | Products'
})

</script>

<style>

</style>