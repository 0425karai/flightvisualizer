<template>
   <v-content>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex>
           出発日<p>{{ date1 }}{{ start }}発</p>
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
      <v-layout column>
        <v-flex d-flex md6>
          <v-card color="blue" class="white--text">
            <v-card-text>
              <div class="headline">PLAN1　10時間　¥106592</div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex md6>
          <v-layout row>
            <v-flex d-flex xs3>
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
                            <div class="headline">成田国際空港</div>
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
                        <div>NRT</div>
                        <div>0:00</div>
                        <div>▼</div>
                        <div>MUC</div>
                        <div>5:00</div>
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
                        <div class="headline">仁川国際空港周辺の楽しいアクティビティ</div>
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
                        <div>NRT</div>
                        <div>0:00</div>
                        <div>▼</div>
                        <div>MUC</div>
                        <div>5:00</div>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
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
                            <div class="headline">成田国際空港</div>
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
      <v-layout column>
        <v-flex d-flex md6 >
          <v-card color="blue">
            <v-card-text  class="white--text">候補1　10時間　¥106592</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex md6>
          <v-layout row>
            <v-flex d-flex xs3>
              <v-card hover>
                <v-card-text>NRT<br/>▼<br/>MUC</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs6>
              <v-card hover>
                <v-card-text>かっこいい写真</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs3>
              <v-card hover>
                <v-card-text>NRT<br/>▼<br/>MUC</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
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
    console.log(this.date1);
    this.date2 = Vue.ls.get('date2');
    console.log(this.date2);
    this.start = Vue.ls.get('start');
    console.log(this.start);
  }
}

</script>

<style scoped lang="scss">
</style>
