<template>
  <div class="flex items-center px-10 pt-9 pb-10 rounded-2xl bg-secondary">
    <img
        class="mr-10"
        src="~/assets/images/icons/info.svg"
        alt="info"
    >
    <p class="text-14 text-primary
    md:text-16
    xl:text-20
    2xl:text-24
    ">Итого: {{ amount ? amount : '...' }}</p>
  </div>
</template>
<script>
export default {
  name: 'CalculatorResult',
  props: {
    amount: {
      type: Number
    }
  }
}
</script>