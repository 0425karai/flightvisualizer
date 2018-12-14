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
      <v-spacer></v-spacer>
      
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
