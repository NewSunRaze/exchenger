<template>
  <div class="flex flex-col h-[max-content] px-8 py-10 rounded-3xl bg-secondary border mt-5
   md:mt-0
  ">
    <h3 class="mb-12 text-13 font-medium text-primary uppercase
    xl:text-15
    2xl:text-18
    ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
    </h3>
    <div class="flex flex-col justify-between font-normal text-main
    md:flex-row"
    >
      <ul>
        <li
          v-for="(contentItem, index) in listContent"
          :key="`content${index}`"
          class="text-13 relative mb-5 px-7
          before:block before:absolute before:border-2 before:border-red before:w-3 before:h-3 before:rounded-full before:absolute before:top-1/3 before:left-0
          md:mb-8 md:mb-6
          xl:text-14
          2xl:text-18
        ">
          {{ contentItem }}
        </li>
      </ul>
      <div class="flex mt-10
       md:mt-0
      ">
        <div class="flex h-[max-content] w-[302px] gap-2.5 m-[-10px]
            md:flex-col md:rounded-tr-[50px] md:rounded-bl-[50px] xl:overflow-hidden md:m-[-4px] md:w-[86px]
            xl:flex-row xl:flex-wrap xl:rounded-tr-[50px] xl:rounded-bl-[50px] xl:overflow-hidden xl:w-[242px]
            2xl:w-[308px] 2xl:m-[-16px] 2xl:gap-4
            "
        >
          <img
              class="rounded-tl-[15px] rounded-br-[15px] first:rounded-[15px] first:rounded-br-none first:rounded-tl-none w-[69px] h-[46px]
              md:w-[86px] md:h-[58px]
              xl:w-[116px] xl:h-[116px] xl:rounded-none xl:first:rounded-none
              2xl:w-[146px] 2xl:h-[146px]"
              v-for="(image, index) in images"
              :key="`image${index}`"
              :src="require(`~/assets/images/${image.name}`)"
              :alt="`image-№${index}`"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      listContent: [
          'Incididunt ut labore et dolore magna aliqua',
          'Incididunt ut labore et',
          'Incididunt ut labore et dolore',
          'Labore et dolore',
          'Incididunt ut',
          'Incididunt ut labore et dolore',
          'Incididunt ut labore'
      ],
      images: [
        {
          name: 'img-1.jpg'
        },
        {
          name: 'img-2.jpg'
        },
        {
          name: 'img-3.jpg'
        },
        {
          name: 'img-4.png'
        },
      ]
    }
  }
}

</script>