<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-spacer></v-spacer>
        <v-radio-group v-model="row" row>
           <v-radio label="片道" value="radio-1"></v-radio>
           <v-radio label="往復" value="radio-2"></v-radio>
        </v-radio-group>
      </v-layout>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex xs4>
         <v-text-field label="出発地" 
         v-on:keyup.enter="doneEdit" outline></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs4>
         <v-text-field label="目的地" ref="goal" outline></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout raw wrap>
        <v-spacer></v-spacer>
        <v-flex xs4>
          <v-menu
            ref="menu1"
            v-model="modal1"
            :close-on-content-click="false"
            :nudge-right="200"
            transition="scale-transition"
            offfset-x
            attach
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date1"
              label="出発日"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date1" color="light-blue" scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="light-blue" @click="modal1 = false">Cancel</v-btn>
              <v-btn flat color="light-blue" @click="$refs.menu1.save(date1)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs4>
          <v-menu
            ref="menu2"
            v-model="modal2"
            :close-on-content-click="false"
            :nudge-right="200"
            transition="scale-transition"
            offfset-x
            attach
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="date2"
              label="現地到着日"
              prepend-icon="event"
              readonly
          ></v-text-field>
          <v-date-picker v-model="date2" color="pink" scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="pink" @click="modal2 = false">Cancel</v-btn>
            <v-btn flat color="pink" @click="$refs.menu2.save(date2)">OK</v-btn>
          </v-date-picker>
          </v-menu>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap >
        <v-spacer></v-spacer>
        <v-flex xs4>
        <v-combobox 
          v-model="countselect"
          :items="counts"
          label="人数"
          attach
        ></v-combobox>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs4>
        <v-combobox
          v-model="seatselect"
          :items="seats"
          label="座席"
          attach
        ></v-combobox>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-container>

    <v-container class="text-xs-center">
      <v-layout justify-center="">
        <v-dialog v-model="dialog" width="500">
          <v-btn slot="activator" color="blue lighten-1" dark>
            検索
          </v-btn>
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              検索中です…
            </v-card-title>
            <v-card-text>
              画面が切り替わらない場合は以下をクリック
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat to="/result">
                検索結果へ
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>

  </v-content>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    modal1: false,
    modal2: false,
    countselect: '1',
    seatselect: 'first',
    counts: ['1','2','3','4','5','6'],
    seats: ['first', 'business', 'economy']
  }),
  methods: {
    doneEdit: function() {
      this.$refs.goal.focus()
    }
  }
};
</script>

<style scoped lang="scss">
</style>

