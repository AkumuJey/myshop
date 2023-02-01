<template>
    <div>
    <header class="shadow-sm bg-white">
      <nav class="bg-slate-200 container mx-auto p-4 flex justify-between">
        <nuxt-link to="/products" class="font-bold">Here We Go</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
        </ul>
      </nav>
    </header>
        <div>
            <slot class="container mx-auto"/>
        </div>
    </div>
</template>
<script>

</script>

<style>

</style>
