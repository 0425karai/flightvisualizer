<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-radio-group v-model="row" row>
           <v-radio label="片道" value="radio-1"></v-radio>
           <v-radio label="往復" value="radio-2"></v-radio>
        </v-radio-group>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs4>
         <v-text-field label="出発地" outline></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs4>
         <v-text-field label="目的地" outline></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap>
       <v-flex xs4>
         <v-dialog
           ref="dialog"
           v-model="modal"
           :return-value.sync="date"
           persistent
           lazy
           full-width
           width="290px"
         >
           <v-text-field
             slot="activator"
             v-model="date"
             label="出発日"
             prepend-icon="event"
             readonly
           ></v-text-field>
           <v-date-picker v-model="date" color="light-blue" scrollable>
             <v-spacer></v-spacer>
             <v-btn flat color="light-blue" @click="modal = false">Cancel</v-btn>
             <v-btn flat color="light-blue" @click="$refs.dialog.save(date)">OK</v-btn>
           </v-date-picker>
         </v-dialog>
       </v-flex>
       <v-spacer></v-spacer>
       <v-flex xs4>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date2"
            persistent
            lazy
            full-width
            width="290px"
          >
          <v-text-field
            slot="activator"
            v-model="date2"
            label="現地到着日"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date2" scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap justify-center="">
        <v-flex xs4>
        <v-combobox 
          v-model="countselect"
          :items="counts"
          label="人数"
        ></v-combobox>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs4>
        <v-combobox
          v-model="seatselect"
          :items="seats"
          label="座席"
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
              次の画面に移ります
            </v-card-title>
            <v-card-text>
              待ってね待ってね〜
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="dialog = false">
                I accept
              </v-btn>
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
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    countselect: '1',
    seatselect: 'first',
    counts: ['1','2','3','4','5','6'],
    seats: ['first', 'business', 'economy']
  })
};
</script>

<style scoped lang="scss">
</style>

