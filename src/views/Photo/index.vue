<template>
 <v-container grid-list-md text-xs-center>
    <v-layout v-for="(time, index) in times" :key="index" :class="getColorClass(index)" row wrap>
      <v-flex d-flex xs12 sm3 md1>
        <v-card>
          <v-card-text class="px-0">{{time.name}}
            <span style="font-size: 2em; color:#3E2723;">
              <i class="fas fa-clock"></i>{{time.label}}
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
import plans from '@/db/plans';
export default {
  name: "Photo",
  props: ["planId"],
  data () {
    return {
      times: plans[this.planId].times
    }
  },
  methods: {
      getColorClass(index) {
        switch (Number(index) % 3) {
          case 0:
            return "lime lighten-5";
            break;
          case 1:
            return "lime lighten-3";
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