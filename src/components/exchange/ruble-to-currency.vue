<template>
  <div class="flex flex-col p-10 bg-gray-500 rounded-3xl drop-shadow-md min-w-[330px]
  md:min-w-[344px]
  xl:min-w-[370px]"
  >
    <div class="w-4/5 mb-10">
      <img src="~/assets/images/icons/money-icon-blue.svg" alt="money">
    </div>
    <h2 class="mb-10 text-primary font-medium">AUD</h2>
    <p class="mb-12">Австралийский доллар</p>
    <ul class="text-14 font-medium
        xl:text-15
        2xl:text-16
    ">
      <li
          class="relative mb-5 px-7
          before:block before:absolute before:border-2 before:border-red before:w-3 before:h-3 before:rounded-full before:absolute before:top-1/3 before:left-0
          md:mb-8 md:mb-8
        ">
        Номинал: 1
      </li>
      <li
          class="relative mb-5 px-7
          before:block before:absolute before:border-2 before:border-red before:w-3 before:h-3 before:rounded-full before:absolute before:top-1/3 before:left-0
          md:mb-8 md:mb-8
        ">
        Курс: 39.841
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RubleToCurrency",
  props:{

  }
}
</script>

<style scoped>

</style>