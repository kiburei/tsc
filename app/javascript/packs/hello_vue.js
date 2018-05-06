import Vue from 'vue/dist/vue.esm'
import axios from 'axios';


document.addEventListener('DOMContentLoaded', () => {

  var app = new Vue({
    el: '#brands',
    data: {
      brands: [
        {name: 'Narok', tagline: 'New York', image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwid3NrEwe7aAhWHVBQKHYOiBj8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.menswearhouse.com%2Fmens-suits%2Fslim-fit-extra-trim-suits%2Ftommy-hilfiger-blue-slim-fit-suit-38XM38XN14&psig=AOvVaw2KKhsHt9tbzeRrmDSW_e0u&ust=1525607653707705', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt' },
        {name: 'Sao Satorial', tagline: '', image: 'logo', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt' },
        {name: 'TAYLER GRAY', tagline: '', image: 'logo', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt' },
      ]
    }
  })

  var app = new Vue({
    el: '#categories',
    data: {
      categories: [
        {name: 'Suits'},
        {name: 'Shirts'},
        {name: 'Ties'},
        {name: 'Cufflinks'},
      ]
    }
  })

  var app = new Vue({
    el: '#shop-products',
    data: {
      products: [
        {name: 'Shirt', price: 2000},
        {name: 'Shirt', price: 2000},
        {name: 'Shirt', price: 2000},
        {name: 'Shirt', price: 2000},
        {name: 'Shirt', price: 2000},
        {name: 'Shirt', price: 2000},
      ]
    }
  })

})
