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
  methods: {
    async copyResult () {
      const text = `Celsius: ${this.toCelsius}°C
      Fahrenheit: ${this.toFahrenheit}°F
      Kelvin: ${this.toKelvin}K`
      await navigator.clipboard.writeText(text)
      window.alert(`
      Has copied to clipboard:
      ${text}`)
    },
    onlyNumber (event) {
      // const reg = /^-?[0-9]+$/
      // 96-105, 8(backspace), 109(-), 37-40(方向)
      const keyCode = event.keyCode
      if (keyCode === 8 || (keyCode >= 96 && keyCode <= 105) || keyCode === 109 || (keyCode >= 34 && keyCode <= 40)) {
        return true
      } else {
        event.preventDefault()
      }
    }
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
        return Number(value)
      } else {
        return Number(value).toFixed(2)
      }
    }
  }
})
