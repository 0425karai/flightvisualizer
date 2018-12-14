<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <to-do></to-do>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import ToDo from "./components/ToDo.vue";
import firebase from "firebase";

export default {
  name: "Todo",
  components: {
    ToDo
  },
  beforeCreate() {
      if(firebase.auth().currentUser){
        console.log(firebae.auth().currentUser)
      }else{
      alert("TOO BAD ! I'm afraid you need to login to see this page.")
      this.$router.push("/")
     }
    }
};
</script>

<style scoped lang="scss">
</style>
