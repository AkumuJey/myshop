<template>
    <div>
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <div>
        <slot />
    </div>
    <footer>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
        </ul>
    </footer>
    </div>
</template>
<script>

</script>

<style>
.router-link-exact-active {
    color:brown;
}
</style>
