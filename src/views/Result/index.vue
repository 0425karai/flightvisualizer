<template>
   <v-content>
    <v-container grid-list-md>
      <v-layout row wrap d-flex md3>
        <div class="headline text-md-center font-weight-bold">
          <v-chip color="light-blue darken-4" text-color="white"><font style="font-size:2em">出発日{{ date1 }}　{{ depart }}発　{{ arrive }}着　帰国日{{ date2 }}</font></v-chip>
        </div>      
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
      <v-container v-for="(plan, index) in plans" :key="index">
        <v-layout column>
          <v-flex d-flex md6>
            <v-card color="blue" class="white--text">
              <v-card-text>
                <div class="headline">PLAN{{ plan.id }}　{{ plan.time }}　¥{{ plan.cost }}</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex md6>
            <v-layout row>
              <v-flex d-flex xs3 >
                <v-layout column>
                  <v-flex d-flex>
                    <v-card hover>
                      <v-img 
                      class="white--text" 
                      height="200px" 
                      :src="plan.dimg1"
                      gradient="to top, rgba(0,0,0,0), rgba(0,0,0,.3)">
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <div class="headline">{{ plan.dname1 }}</div>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-img>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex>
                    <v-card hover>
                      <v-card-text>
                        <div class="headline">
                          <div>{{ plan.dep1 }}</div>
                          <div>{{ plan.dtime1 }}</div>
                          <div>▼</div>
                          <div>{{ plan.arr1 }}</div>
                          <div>{{ plan.atime1 }}</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex d-flex xs6>
                <v-dialog
                  v-model="dialog"
                  width="80%"
                >
                 
                    <v-card  slot="activator"  hover >
                  <v-img 
                  class="white--text" 
                  height="400px" 
                  :src="plan.aimg1"
                  gradient="to top, rgba(0,0,0,0), rgba(0,0,0,.3)">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <div class="headline">{{ plan.aname1 }}周辺の<br/>{{ plan.ttime }}で出来る体験を探す</div>
                      </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                </v-card>

                  <v-card>
                  
                    <photo :planId="index"/>

                  </v-card>
                </v-dialog>

              </v-flex>
              <v-flex d-flex xs3>
                <v-layout column>
                  
                  <v-flex d-flex>
                    <v-card hover>
                      <v-card-text>
                        <div class="headline">
                          <div>{{ plan.dep2 }}</div>
                          <div>{{ plan.dtime2 }}</div>
                          <div>▼</div>
                          <div>{{ plan.arr2 }}</div>
                          <div>{{ plan.atime2 }}</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex>
                    <v-card hover>
                      <v-img 
                      class="white--text" 
                      height="200px" 
                      :src="plan.aimg2"
                      gradient="to top, rgba(0,0,0,0), rgba(0,0,0,.3)">
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <div class="headline">{{ plan.aname2 }}</div>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-img>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
   </v-content>  
</template>

<script>
import Vue from 'vue';
import plans from '@/db/plans';
import Photo from "@/views/Photo";
export default {
  name: "Result",
  components: {
    Photo
  },
  data: () => ({
    sortselect: '価格の安い順',
    sorts: ['価格の安い順', '所要時間の短い順', 'おすすめ順'],
    message2: null,
    date1: null,
    date2: null,
    plans: plans,
    id: plans[0].id,
    time: plans[0].time,
    cost: plans[0].cost,
    dep1: plans[0].dep1,
    dname1: plans[0].dname1,
    dimg1: plans[0].dimg1,
    dtime1: plans[0].dtime1,
    arr1: plans[0].arr1,
    aname1: plans[0].aname1,
    aimg1: plans[0].aimg1,
    atime1: plans[0].atime1,
    ttime: plans[0].ttime,
    dep2: plans[0].dep2,
    dimg2: plans[0].dimg2,
    dname2: plans[0].dname2,
    dtime2: plans[0].dtime2,
    arr2: plans[0].arr2,
    aname2: plans[0].aname2,
    aimg2: plans[0].aimg2,
    atime2: plans[0].atime2,
  }),
  created(){
    this.date1 = Vue.ls.get('date1');
    console.log(this.date1);
    this.date2 = Vue.ls.get('date2');
    console.log(this.date2);
    this.depart = Vue.ls.get('depart');
    console.log(this.depart);
    this.arrive = Vue.ls.get('arrive');
    console.log(this.arrive);
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
