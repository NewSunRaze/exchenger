<template>
  <div class="container pt-12 md:pt-5">
    <h1 class="text-20 font-medium text-primary mb-10
     md:text-26
     xl:text-26
     2xl:text-36"
    >
      Курс рубля
    </h1>
    <div class="flex flex-wrap gap-5 xl:gap-10">
      <ruble-to-currency
          v-for="(currency, index) in currencyList"
          :key="currency.id"
          :is-odd="isOddElement(index)"
          v-bind="currency"
      />
    </div>
    <page-footer class="my-10" />
  </div>
</template>
<script>
import RubleToCurrency from '../components/exchange/ruble-to-currency'
import PageFooter from '../components/exchange/footer/footer'
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'Exchange',
  components: {
    RubleToCurrency,
    PageFooter
  },
  computed: {
    ...mapGetters({ currency: 'currency' }),

    currencyList() {
      return Object.entries(this.currency).slice(0,3).map(entry => entry[1])
    }
  },
  created() {
    this.getCurrency()
  },
  methods:{
    ...mapActions(['getCurrency']),
    isOddElement(index) {
      return index % 2 === 0
    }
  }
}
</script>