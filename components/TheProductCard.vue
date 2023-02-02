<template>
  <div class="card text-center flex flex-col justify-between">
    <img :src="product.image" :alt="product.title" srcset="">
    <div>
        <p class="text-bold text-gray-700 m-4 truncate">{{ product.title }}</p>
        <nuxt-link :to="`/products/${product.id}`" class="">
          <p class="btn">View Details</p>
        </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style>

</style>