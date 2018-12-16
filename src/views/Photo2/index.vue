<template>
 <v-container grid-list-md text-xs-center>
    <v-layout v-for="(time, index) in times" :key="index" :class="getColorClass(index)" row wrap>
      <v-flex d-flex xs12 sm3 md1>
        <v-card>
          <v-card-text class="px-0">{{time.name}}
            <span style="font-size: 2em; color:#3E2723;">
              <i class="fas fa-clock"></i>
             </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex d-flex xs12 sm3 md5>
        <v-card dark color="primary">
          <v-card-text class="px-0"><v-img :src="time.recommend1" aspect-ratio="2"></v-img></v-card-text>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex d-flex xs12 sm3 md5>
        <v-card dark color="primary">
          <v-card-text class="px-0"><v-img :src="time.recommend2" aspect-ratio="2"></v-img></v-card-text>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Photo2",
  data () {
    return {
      times: [
        {
          value: false,
          name: '1hr',
          recommend1: 'https://www.heidelbergcement.com/sites/default/files/assets/images/bkk_05.jpg',
          recommend2: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Suvarnabhumi_Airport,_Bangkok,_Thailand.jpg'
        },
        {
          value: false,
          name: '3hr',
          recommend1: 'https://cdn.4travel.jp/img/tcs/t/pict/src/41/47/34/src_41473484.jpg?1448294059',
          recommend2: 'https://cdn.4travel.jp/img/tcs/t/pict/src/42/09/59/src_42095947.jpg?1452505299'

        },
        {
          value: false,
          name: '12hr',
          recommend1: 'https://d18gmz9e98r8v5.cloudfront.net/ptr/20140731002520_1437589073_10009_8.jpg',
          recommend2: 'https://tabizine.jp/wp-content/uploads/2017/12/161239-01-640x360.jpg'

        }
      ]
    }
  },
  methods: {
      getColorClass(index) {
        switch (Number(index) % 3) {
          case 0:
            return "lime lighten-3";
            break;
          case 1:
            return "lime lighten-2";
            break;
          case 2:
            return "lime lighten-1";
            break;
          default:
            return "white";
        }
      }
    }  
  }

</script>