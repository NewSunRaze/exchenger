<template>
  <div class="flex flex-col rounded-none bg-secondary px-5 py-10
       md:p-10 md:rounded-3xl md:flex-row
  ">
    <div class="flex flex-col
        md:w-3/5"
    >
      <div class="text-16 font-medium text-primary text-center
          md:text-18 md:text-left
          xl:text-29
          2xl:text-36
          ">
        <h2>
          Нужна помощь?
        </h2>
        <h2>Мы поможем! Просто свяжитесь с нами.</h2>
      </div>
      <p class="font-12 mt-5 text-center
         md:text-10 md:mt-2 md:text-left
         xl:text-13 xl:mt-6 xl:max-w-[80%]
         2xl:font-16 2xl:mt-10 2xl:max-w-[80%]
      ">Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.</p>
    </div>
    <div class="flex justify-center
          md:w-2/5"
    >
      <div class="flex flex-col items-center">
        <a class="text-primary text-26 mt-5
          md:text-24 md:mt-0
          xl:text-40
          2xl:text-50
          " href="tel:88008889028">
          8 (800) 888-90-28
        </a>
        <p class="text-12
         xl:text-18
         2xl:text-24
      ">
          или
        </p>
        <a class="text-18
         md:text-20
         xl:text-24
         2xl:text-34
         " href="mailto:info@example.ru"
        >
          info@example.ru
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>