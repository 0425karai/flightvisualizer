<template>
   <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex>
           出発日<p>〇〇空港発</p>
           現地到着日<p>△△空港着</p>
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
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex xs2>
          <v-card color="rgba(55, 0, 0, 0.5)">NRT(13:20)<br/>↓<br/>ICN(15:55)</v-card>
        </v-flex>
        <v-flex xs6 offset-xs1>
          <v-card color="rgba(255, 0, 0.5, 0.1)">NRT(13:20)<br/>↓<br/>ICN(15:55)</v-card>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <v-card color="rgba(55, 0, 0, 0.5)">ICN(17:25)<br/>↓<br/>ICN(2:40)</v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex xs2>
          <v-card color="rgba(55, 0, 0, 0.5)">NRT(13:20)<br/>↓<br/>ICN(15:55)</v-card>
        </v-flex>
        <v-flex xs6 offset-xs1>
          <v-card color="rgba(255, 0, 0.5, 0.1)">NRT(13:20)<br/>↓<br/>ICN(15:55)</v-card>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <v-card color="rgba(55, 0, 0, 0.5)">ICN(17:25)<br/>↓<br/>ICN(2:40)</v-card>
        </v-flex>
      </v-layout>
    </v-container>
   </v-content>  
</template>

<script>
import Vue from 'vue';
import plans from '@/db/plans'
export default {
  name: "Test",
  data: () => ({
    sortselect: '価格の安い順',
    sorts: ['価格の安い順', '所要時間の短い順', 'おすすめ順'],
    message2: null,
    date1: null,
    date2: null,
  }),
  created(){
    console.log(plans)
    console.log(plans[0])
    var flight = plans[0][0]
    console.log(flight.t)
    console.log(this.parseTime(flight.t))
  },
  methods: {
    parseTime(s) {
      var part = s.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
      var hh = parseInt(part[1], 10);
      var mm = parseInt(part[2], 10);
      var ap = part[3] ? part[3].toUpperCase() : null;
      if (ap === "AM") {
        if (hh == 12) {
            hh = 0;
        }
      }
      if (ap === "PM") {
        if (hh != 12) {
          hh += 12;
        }
      }
      return { hh: hh, mm: mm };
    }
  }
}

</script>

<style scoped lang="scss">
</style>
