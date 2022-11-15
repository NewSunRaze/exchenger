<template>
  <div class="flex flex-col">
    <span
        v-if="label"
        class="text-14 font-medium mb-5
        2xl:text-16
        "
    >{{ label }}</span>
    <input
        class="input px-7 py-7 rounded border border-gray-200 placeholder-gray-300 text-12
        2xl:text-14
        "
        :value="value"
        :placeholder="placeholder"
        v-numeric-only
        @input="onInput($event.target.value)"
    >
  </div>
</template>
<script>
import BaseInput from './base-input'

export default {
  name: 'NumberInput',
  extends: BaseInput,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      required: true,
    },
    placeholder: {
      type: String
    }
  }
}
</script>