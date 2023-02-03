<template>
  <div class="card">
    <div class="grid grid-rows-2 md:grid-cols-2 gap-10">
        <div class="p-7">
            <img :src="product.image" :alt="product.title" class="mx-auto my-7 max-w-sm">
        </div>
        <div class="p-10">
            <h2 class="text-4xl my-7">{{ product.title }}</h2>
            <p class="text-xl my-7">Price - KSh {{ product.price * 100 }}</p>
            <h3 class="font-bold border-b-2 mb-4 pb-2">Description: </h3>
            <p>{{ product.description }}</p>
            <button class="btn flex mt-5">
              <span class="material-icons">
                shopping_cart_checkout
                </span>
              <span>Add to cart</span>
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style>

</style>