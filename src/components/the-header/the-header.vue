<template>
  <div class="flex bg-gray-500 w-full">
    <div class="container py-5 text-12 text-text-gray-500">
      <NuxtLink
          to="/"
          class="mr-10"
          exact
      >
        Калькулятор
      </NuxtLink>
      <NuxtLink
          to="/exchange"
          exact
      >
        Курс рубля
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheHeader'
}
</script>
<style>
.nuxt-link-active{
  color: #343434;
}
</style>