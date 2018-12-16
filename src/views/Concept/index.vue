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
                <span class="display-1">TrainsitExplorerで、思いがけない素敵なトランジット体験ができるフライトプランを探してみませんか？</span>
               
              </v-flex>
            </v-layout>
    </v-container>


      </v-card>
    </v-flex>
  </v-layout>
  <div class="text-xs-center mt-4">
    <v-btn slot="activator" color="blue lighten-1" dark v-on:click="search">戻る</v-btn>
  </div>
</v-container>

</template>