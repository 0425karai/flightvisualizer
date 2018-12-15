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
        <v-flex xs3>
        <v-combobox 
          v-model="sortselect"
          :items="sorts"
          label="並び替え"
          attach
        ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout >
        <v-flex xs3>
          <v-card height="45">候補1<br/>8時間30分</v-card>
        </v-flex>
        <v-flex xs9>
            <svg viewbox="0 0 600 45" width="600" height="45">
              <rect x="0" y="0" width="200" height="15" fill="#6fbadd" />
              <rect x="280" y="0" width="150" height="15" fill="#6fbadd" />
              <g font-family="sans-serif" font-size="15">
                <text x="240" y="15" text-anchor="middle" fill="black">
                  MUC
                </text>
                <text x="100" y="35" text-anchor="middle" fill="black">
                  JAL
                </text>
              </g>
            </svg>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <v-card height="45">候補2<br/>7時間</v-card>
        </v-flex>
        <v-flex xs9>
            <svg viewbox="0 0 600 45" width="600" height="45">
              <rect x="20" y="15" width="350" height="15" fill="#6fbadd" />
            </svg>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <p>候補3<br/>9時間15分</p>
        </v-flex>
        <v-flex xs9>
            <svg viewbox="0 0 600 45" width="600" height="45">
              <rect x="100" y="15" width="120" height="15" fill="#6fbadd" />
              <rect x="280" y="15" width="250" height="15" fill="#6fbadd" />
            </svg>
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
