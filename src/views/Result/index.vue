<template>
   <v-content>
     <script type="text/x-template" id="modal-template">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>

    <!-- app -->
    <div id="app">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <modal v-if="showModal" @close="showModal = false">
        <!--
          you can use custom content here to overwrite
          default content
        -->
        <h3 slot="header">custom header</h3>
      </modal>
    </div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex>
           <p>出発日{{ date1 }}　{{ start }}発　　現地出発日{{ date2 }}　{{ goal }}発</p>
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
      <div v-for="(plan, index) in plans" :key="index">
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
                      src="https://www.narita-airport.jp/img/original/img_t006_banner_1__1.jpg"
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
                <v-card hover>
                  <v-img 
                  class="white--text" 
                  height="400px" 
                  src="https://re-lief.net/wp-content/uploads/slw8.jpg"
                  gradient="to top, rgba(0,0,0,0), rgba(0,0,0,.3)">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <div class="headline">{{ plan.aname1 }}周辺の楽しいアクティビティ</div>
                      </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                </v-card>
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
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sculpture_of_hasta_mudras_at_Indira_Gandhi_International_Airport.jpg/1920px-Sculpture_of_hasta_mudras_at_Indira_Gandhi_International_Airport.jpg"
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
      </div>
    </v-container>
   </v-content>  
</template>

<script>
import Vue from 'vue';
import plans from '@/db/plans';
export default {
  name: "Result",
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
    dtime1: plans[0].dtime1,
    arr1: plans[0].arr1,
    aname1: plans[0].aname1,
    atime1: plans[0].atime1,
    dep2: plans[0].dep2,
    dname2: plans[0].dname2,
    dtime2: plans[0].dtime2,
    arr2: plans[0].arr2,
    aname2: plans[0].aname2,
    atime2: plans[0].atime2,

      
   
  }),
  created(){
    this.date1 = Vue.ls.get('date1');
    console.log(this.date1);
    this.date2 = Vue.ls.get('date2');
    console.log(this.date2);
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
