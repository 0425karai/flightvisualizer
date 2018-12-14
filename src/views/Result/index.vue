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
  </v-content>
</template>

<script>
export default {
  name: "Result",
  components: {
    
  }
};
</script>

<style scoped lang="scss">
</style>
