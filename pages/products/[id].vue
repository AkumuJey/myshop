<template>
  <div>
    <Head>
      <Title>My Shop | Products | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
    <TheProductDetails :product="product"/>
  </div>
</template>

<script setup>
const { id } = useRoute().params

// fetching the product

const url = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(url, { key: id })

if(!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product not fround', fatal: true})
}

definePageMeta({
  layout: 'products'
})


</script>

<style scoped>

</style>