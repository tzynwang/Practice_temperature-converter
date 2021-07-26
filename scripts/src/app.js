const Vue = require('vue/dist/vue.js')
// https://stackoverflow.com/questions/47332728/you-are-using-the-runtime-only-build-of-vue-where-the-template-compiler-is-not-a

const app = new Vue({
  el: '#app',
  data: {
    input: '0',
    type: 'celsius',
    celsius: '',
    fahrenheit: '',
    kelvin: ''
  },
  computed: {
    toCelsius () {
      if (this.type === 'fahrenheit') {
        return (Number(this.input) - 32) * 5 / 9
      }
      if (this.type === 'kelvin') {
        return Number(this.input) - 273.15
      }
      return this.input
    },
    toFahrenheit () {
      if (this.type === 'celsius') {
        return (Number(this.input) * 9 / 5) + 32
      }
      if (this.type === 'kelvin') {
        return (Number(this.input - 273.15) * 9 / 5) + 32
      }
      return this.input
    },
    toKelvin () {
      if (this.type === 'celsius') {
        return Number(this.input) + 273.15
      }
      if (this.type === 'fahrenheit') {
        return (Number(this.input - 32) * 5 / 9) + 273.15
      }
      return this.input
    }
  },
  filters: {
    floatPointTwo (value) {
      if (Number(value) % 1 === 0) {
        return value
      } else {
        return Number(value).toFixed(2)
      }
    }
  }
})
