; {
  Vue.component('custom-select', {
    template: '#select-tempalte',
    props: {
      list: Array
    },
    data () {
      return {
        value: '',
        showSelect: false,
      }
    },
    watch: {

    },
    methods: {
      select(value) {
        this.value = value
        this.showSelect = false
      },
      search() {

      }
    }
  })
}