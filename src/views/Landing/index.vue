<template>
<v-container>
  <v-layout>
    <v-flex xs12>
      <v-card>
        

<v-carousel class="white--text">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>

   

  </v-carousel>

    <v-container class ="blue white--text">
            <v-layout class="text-sm-left">
              <v-flex xs12  flexbox>
                <span class="display-1">思いがけない素敵なトランジット体験ができるフライトプランを探してみませんか？</span>
               
              </v-flex>
            </v-layout>
    </v-container>


      </v-card>
    </v-flex>
  </v-layout>
  <div class="text-xs-center mt-4">
    <v-btn slot="activator" color="blue lighten-1" dark v-on:click="search">さっそく使ってみる</v-btn>
  </div>
</v-container>




</template>

<script>
import Vue from 'vue';
export default {
  name: "Landing",
  
  data () {
      return {
        items: [
          {
            src: 'https://airportredcarpet.com/files/1614/1190/5054/Side_Transit.png'
          },
          
          {
            src: 'https://cdn.4travel.jp/img/thumbnails/imk/tips_pict/11/65/22/650x450_11652237.jpg'
          },
          {
            src: 'https://baouc.com/upload/vanvan/2018/03/24/airport-transit-visa-schengen-vi-84d5fad70d-52069c7e217c71c36092e50ec9042e95.jpg'
          },
          {
            src: 'https://cdn.citynomads.com/wp-content/uploads/2017/06/08154455/straits-kitchen-cover3.png'
          },
          {
            src: 'https://www.cathaypacific.com/content/dam/focal-point/cx/travel-information/airport/airport-HKIA-900x600.jpg'
          },
          {
            src: 'https://wondertrip.jp/img/201608/iStock_60587576_XXXLARGE.jpg'
          },
          
        ]
      }
    },
  
  methods:{
    search: function (event) {
      
     this.$router.push("/Home")
    },
  methods: {
    doneEdit: function() {
      this.$refs.goal.focus()
    },
  

    
  } 
 }
};

</script>