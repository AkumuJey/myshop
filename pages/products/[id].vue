<template>
  <div>
    <h2>{{ product.title }}</h2>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params

// fetching the product

const url = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(url, { key: id })

definePageMeta({
  layout: 'products'
})

</script>

<style scoped>

</style>