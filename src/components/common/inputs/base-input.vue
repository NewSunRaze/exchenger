<template>
  <div class="flex flex-col">
    <span
        v-if="label"
        class="text-14 font-medium mb-5
        2xl:text-16"
    >
      {{ label }}
    </span>
    <input
        class="input px-7 py-7 rounded border border-gray-200 placeholder-gray-300 text-12
        2xl:text-14
        "
        :value="value"
        :placeholder="placeholder"
        @input="onInput($event.target.value)"
    >
  </div>
</template>
<script>

const DEBOUNCE_TIME = 500

export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    numeric: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: {
      handler(val) {
        this.oninput(val)
      },
    },
  },
  mounted() {
    this.oninput = this.lodash.debounce(this.onInput, DEBOUNCE_TIME)
  },
  beforeDestroy() {
    this.oninput.cancel()
  },
  methods:{
    onInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>