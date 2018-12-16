<template>
<v-container>
  <v-layout>
    <v-flex xs12>
        
    <v-container class ="black--text">
            <v-layout class="text-sm-left">
              <v-flex xs12  flexbox>
                <span class="display-3">Concept</span>
               
              </v-flex>
            </v-layout>
    </v-container>
       
    <v-card>
        <v-img 
          height ="400px"
          src="https://eikaiwa.dmm.com/blog/wp-content/uploads/2017/08/1-33.jpg">
        </v-img>
    </v-card>

   <v-container class ="black--text">
            <v-layout class="text-sm-left">
              <v-flex xs12  flexbox>
                <span class="headline">TransitExplorerは、乗り継ぎに使う空港の中や空港の周辺でできる楽しい体験を探索しながら旅程を比較検討することで、より安く、より充実したフライトプランを見つけられるサービスです。検索結果に表示される乗り継ぎ空港の写真をクリックすることで、あなたのスケジュールの中でできる体験を探すことができます。TransitExplorerでもう一か国経由しながら、あなたが思いもしないようなワクワクする旅行をしてみませんか？</span>
               
              </v-flex>
            </v-layout>
    </v-container>

    

    </v-flex>
  </v-layout>

  <div class="text-xs-center mt-4">
    <v-btn slot="activator" color="blue lighten-1" dark v-on:click="search">戻る</v-btn>
  </div>
</v-container>

</template>

<script>
import Vue from 'vue';
export default {
  name: "Concept",
  
  
  methods:{
    search: function (event) {
      
     this.$router.push("/Landing")
    },

  
  methods: {
    doneEdit: function() {
      this.$refs.goal.focus()
    },
  

    
  } 
 }
};

</script>