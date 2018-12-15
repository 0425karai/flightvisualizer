<template>
   <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex>
           出発日<p>{{ date1 }}〇〇空港発</p>
           現地到着日<p>{{ date2 }}△△空港着</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap >
        <v-flex xs4>
        <v-combobox 
          v-model="sortselect"
          :items="sorts"
          label="並び替え"
          attach
        ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout >
        <v-flex>
            表をがんばって作る
        </v-flex>
      </v-layout>
    </v-container>
   </v-content>  
</template>

<script>
import Vue from 'vue';
export default {
  name: "Result",
  data: () => ({
    sortselect: '価格の安い順',
    sorts: ['価格の安い順', '所要時間の短い順', 'おすすめ順'],
    message2: null,
    date1: null,
    date2: null,
  }),
  created(){
    this.date1 = Vue.ls.get('date1');
    console.log(date1);
    this.date2 = Vue.ls.get('date2');
    console.log(date2);
  }
}
</script>

<style scoped lang="scss">
</style>
