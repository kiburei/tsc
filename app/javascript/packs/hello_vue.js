import Vue from 'vue/dist/vue.esm'
import axios from 'axios';


document.addEventListener('DOMContentLoaded', () => {

  var app = new Vue({
    el: '#brands',
    data: {
      brands: [
        {id: 2, name: 'Sao Satorial', tagline: '', image: 'http://www.pamm.org/sites/default/files/styles/og_image/public/sartorial_logo_grayscale.jpg?itok=YuYW-iSJ', desc: 'Expect more from your clothes.' },
        {id: 1, name: 'Narok', tagline: 'New York', image: 'https://pbs.twimg.com/profile_images/731126847132598274/g0ZsHVVc_400x400.jpg', desc: 'For all your high end made to fit suits' },
        {id: 3, name: 'TAYLER GRAY', tagline: '', image: 'https://www.48hourslogo.com/48hourslogo_data/2018/01/25/69471_1516872559.jpg', desc: 'A classic never goes out of style.' },
      ]
    }
  })

  var app = new Vue({
    el: '#categories',
    data: {
      categories: [
        {name: 'Suits', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-zBHOPyCRV1EZo_Hj10MbIP5cHPt1iPcTQGbYTsw3Wrd_uk7'},
        {name: 'Shirts', image: 'http://static1.businessinsider.com/image/599b401cb0e0b593758b58e0-800/allgingham-hanging.jpg'},
        {name: 'Ties', image: 'https://www.ties.com/blog/wp-content/uploads/2014/08/necktie_care_01.jpg'},
        {name: 'Cufflinks', image: 'https://d3h6k4kfl8m9p0.cloudfront.net/stories/VM4sGUf7b9nJMkXCTR.qow.jpg'},
      ]
    }
  })

  var app = new Vue({
    el: '#shop-products',
    data: {
      products: [
        {id: 1, name: 'Shirt', price: 4000},
        {id: 2, name: 'Suit', price: 56000},
        {id: 3, name: 'Blazer', price: 25000},
        {id: 4, name: 'Tie', price: 2000},
        {id: 5, name: 'Two Piece', price: 45000},
        {id: 6, name: 'Three Piece', price: 75000},
      ]
    }
  })

})
