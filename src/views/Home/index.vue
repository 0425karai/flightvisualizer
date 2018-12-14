<template>
 <v-content>
   <v-container>
     <v-radio-group v-model="row" row>
        <v-radio label="片道" value="radio-1"></v-radio>
        <v-radio label="往復" value="radio-2"></v-radio>
     </v-radio-group>
   </v-container>
   <v-container>
     <v-layout raw wrap>
        <v-text-field label="出発地" outline></v-text-field>
        <v-text-field label="目的地" outline></v-text-field>
     </v-layout>
   </v-container>
 </v-content>
</template>

<script>
export default {
 name: "Home",
 data () {
     return {
       column: null,
       row: null
     }
 }
};
</script>

<style scoped lang="scss">
</style>

