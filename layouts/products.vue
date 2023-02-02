<template>
    <div>
    <header>
      <nav class="container mx-auto p-4">
        <nuxt-link to="/products" class="font-bold btn">Products</nuxt-link>
      </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
    </div>
    <footer class="container p-4 mx-auto flex justify-between border-t-2 bg-slate-200">
        <ul class="flex gap-4">
          <li><nuxt-link to="/" class="btn">Home</nuxt-link></li>
          <li><nuxt-link to="/products" class="btn">Products</nuxt-link></li>
          <li><nuxt-link to="/about" class="btn">About</nuxt-link></li>
        </ul>
    </footer>
    </div>
</template>
<script>

</script>

<style>

</style>
