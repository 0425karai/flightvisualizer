<template>
  <div>
    <v-toolbar
      color="blue"
      dense
      fixed
      clipped-left
      dark
      app
    >
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">FlightVisualizer</span>
      </v-toolbar-title>
      <span style="font-size: 2em; color: white;">
        <i class="fas fa-plane-departure"></i>
      </span>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat>詳しく知る</v-btn>
      <v-btn flat>お問い合わせ</v-btn>
      
    </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script>

import firebase from "firebase";

export default {
  name: "HeaderToolBar",
  data: () => ({
    drawer: false
  }),
  props: {
    source: String
  },
  methods: {
    signout: function(){
      firebase.auth().signOut().then(() => {
this.$router.push('/')
});
    }
  }
};
</script>

<style scoped lang="scss">
</style>
