<template>
  <div>
    <base-input
      class="my-3"
      v-model="form.firstCurrency"
      label="Валюта 1"
      placeholder="Введите название или код"
      @input="oninput"
    />
    <base-input
      class="my-10"
      v-model="form.secondCurrency"
      label="Валюта 2"
      placeholder="Введите название или код"
      @input="oninput"
    />
    <number-input
        class="my-10"
        v-model="form.amount"
        label="Количество"
        placeholder="Введите число"
        @input="oninput"
    />
    <calculator-result v-if="!resultError" :amount="result" />
    <calculator-error v-else :error="resultError" />
  </div>
</template>

<script>
import BaseInput from '../../common/inputs/base-input'
import NumberInput from '../../common/inputs/number-input'
import CalculatorResult from './calculator-result'
import CalculatorError from './calculator-error'

export default {
  name: 'Calculator',
  components: {
    BaseInput,
    NumberInput,
    CalculatorResult,
    CalculatorError
  },
  props: {
    currencyRate: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: {
        firstCurrency: '',
        secondCurrency: '',
        amount: ''
      },
      firstCurrencyData: {},
      secondCurrencyData: {},
      result: null,
      resultError: null
    }
  },
  watch: {
    form: {
      handler: function () {
        this.result = null
        this.resultError = null
      },
      deep: true
    }
  },
  methods: {
    oninput() {
      if(this.form.firstCurrency && this.form.secondCurrency && this.form.amount) {
        this.result = this.calculate(this.form.firstCurrency, this.form.secondCurrency)
      }
    },

    calculate(firstCurrency, secondCurrency) {

      this.firstCurrencyData = this.findCurrency(firstCurrency)
      this.secondCurrencyData = this.findCurrency(secondCurrency)
      if(!this.firstCurrencyData?.Name || !this.secondCurrencyData?.Name) {
        this.resultError = 'Ошибка вычислений. Валюта не найдена.'
        return
      }

      const precision = 1000
      const conversion = this.form.amount * this.firstCurrencyData.Value

      return Math.round((conversion / this.secondCurrencyData.Value) * precision) / precision
    },

    findCurrency(value) {
      let found = false
      for(let currency of Object.values(this.currencyRate)) {
        if(currency.Name.toLowerCase() === value.toLowerCase()) {
          found = true
          return currency
        }
      }
      if(!found) {
        for(let currency of Object.values(this.currencyRate)) {
          if(currency.NumCode.toLowerCase() === value.toLowerCase()) {
            return currency
          }
        }
      }
    },
  },
}

</script>