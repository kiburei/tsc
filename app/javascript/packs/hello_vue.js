import Vue from 'vue/dist/vue.esm'
// import axios from 'axios-on-rails'
import axios from 'axios'

let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'

document.addEventListener('DOMContentLoaded', () => {

  const url = "http://localhost:3000/products"

  var app = new Vue({
    el: '#brands',
    data: {
      brands: [
        {id: 1, name: 'Sao Satorial', tagline: '', image: 'http://www.pamm.org/sites/default/files/styles/og_image/public/sartorial_logo_grayscale.jpg?itok=YuYW-iSJ', desc: 'Expect more from your clothes.' },
        {id: 2, name: 'Narok', tagline: 'New York', image: 'https://pbs.twimg.com/profile_images/731126847132598274/g0ZsHVVc_400x400.jpg', desc: 'For all your high end made to fit suits' },
        {id: 3, name: 'TAYLER GRAY', tagline: '', image: 'https://www.48hourslogo.com/48hourslogo_data/2018/01/25/69471_1516872559.jpg', desc: 'A classic never goes out of style.' },
      ]
    }
  })

  var app = new Vue({
    el: '#categories',
    data: {
      categories: [
        {id: 1, name: 'Suits', image: 'https://www.cheatsheet.com/wp-content/uploads/2015/10/Row-of-men-suit-jackets.jpg'},
        {id: 2, name: 'Shirts', image: 'http://static1.businessinsider.com/image/599b401cb0e0b593758b58e0-800/allgingham-hanging.jpg'},
        {id: 3, name: 'Ties', image: 'https://i.pinimg.com/originals/99/9d/ec/999dec96b1fbf64a9956ef1a5d1cfe17.jpg'},
        {id: 4, name: 'Cufflinks', image: 'https://d3h6k4kfl8m9p0.cloudfront.net/stories/VM4sGUf7b9nJMkXCTR.qow.jpg'},
      ]
    }
  })

  var app = new Vue({
    el: '#shop-products',
    data: {
      products: [],
      items: [],
    },
    mounted() {
      axios.get(url)
    },
    methods: {
      addToCart: function(product) {
        this.items.push(product)
      },
      checkout: function () {
        // alert
      },
      getProducts: function() {
        axios.get(url).then(response => {
          this.products = response.data
        })
      }
    },
    computed: {
      sum: function () {
        var itemCost = this.items.map(x => parseInt(x.price))
        console.log(itemCost)
        const reducer = (itemCost, x) => itemCost + x
        return itemCost.reduce(reducer)
      }
    },
    created: function() {
      this.getProducts()
    }
  })


})
