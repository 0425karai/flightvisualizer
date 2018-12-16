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
  name: "Photo",
  data () {
    return {
      times: [
        {
          value: false,
          name: '1hr',
          recommend1: 'https://re-lief.net/wp-content/uploads/slw8.jpg',
          recommend2: 'https://img.guide.travel.co.jp/article/704/23355/0983203EB7A84B1FB9F886D0D2D8E7D3_LL.jpg'
        },
        {
          value: false,
          name: '3hr',
          recommend1: 'http://img.4travel.jp/img/tcs/t/tips/pict/src/134/256/src_13425659.jpg',
          recommend2: 'https://blogimg.goo.ne.jp/user_image/3d/8f/1f671d96235490578b40e508ac505625.jpg'

        },
        {
          value: false,
          name: '12hr',
          recommend1: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/04/464629385-seoul.jpg',
          recommend2: 'http://www.hikorea.jp/data/topinfo/topinfo_13336960261.jpg'

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