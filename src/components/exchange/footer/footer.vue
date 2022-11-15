<template>
  <div class="flex flex-col items-start rounded-none bg-gray-500 px-5 py-10
       md:items-center md:p-10 md:rounded-3xl md:flex-row"
  >
    <img class="mb-10 md:mb-0 mr-10" src="~/assets/images/icons/info-blue.svg" alt="info">
    <p class="text-primary font-medium text-16
    md:text-18
    xl:text-20"
    >
      Телефон:
      <a href="tel:88008889028">
        8 (800) 888-90-28,
      </a>
      email:
      <a href="mailto:info@example.ru">
        info@example.ru
      </a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>