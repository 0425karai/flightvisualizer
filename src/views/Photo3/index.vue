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
  name: "Photo3",
  data () {
    return {
      times: [
        {
          value: false,
          name: '1hr',
          recommend1: 'http://airport.zashiki.com/travel-report/20120618JAL-C3/Lsize/DSC_0223.JPG',
          recommend2: 'http://cdn.4travel.jp/img/tcs/t/tips/pict/src/108/203/src_10820324.jpg'
        },
        {
          value: false,
          name: '3hr',
          recommend1: 'http://overseas.travel.rakuten.co.jp/kaigai/overseas_common/tour/images/I000003201.jpg',
          recommend2: 'https://voyageavance.global/wp-content/uploads/2018/12/IMG_1670.jpg'

        },
        {
          value: false,
          name: '12hr',
          recommend1: 'http://tabippo.net/wp-content/uploads/shutterstock_150265067.jpg',
          recommend2: 'http://livedoor.blogimg.jp/sevenhdr/imgs/a/0/a06e652f.jpg'

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