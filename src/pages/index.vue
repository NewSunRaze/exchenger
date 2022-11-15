<template>
  <div class="container pt-12 md:pt-5">
    <h1 class="text-20 font-medium text-primary mb-10
     md:text-26">
      Валютный калькулятор
    </h1>
    <div class="flex flex-col justify-between
     md:flex-row
    ">
      <Calculator
        :currency-rate="currency"
        class="w-full
        md:w-[calc(50%-20px)]"
      />
      <Aside
        class="w-full
        md:w-[calc(50%-20px)]"
      />
    </div>
    <Footer class="mt-10 mb-14" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Calculator from '../components/main-page/calculator/calculator';
import Aside from '../components/main-page/aside/aside'
import Footer from '../components/main-page/footer/footer'

export default {
  name: 'MainPage',
  components: {
    Calculator,
    Aside,
    Footer
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({ currency: 'currency' }),
  },
  created() {
    this.getCurrency()
  },
  methods:{
    ...mapActions(['getCurrency']),
  }
}
</script>

<style lang="scss" module>

.Example {
    //
}

</style>
