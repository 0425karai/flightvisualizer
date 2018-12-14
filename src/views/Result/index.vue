<template>
   <v-content>
    <v-container>
      <v-layout>
        <v-flex>
            12月16日（日） 〇〇空港発　△△空港着
        </v-flex>
      </v-layout>
      <v-layout row wrap >
        <v-flex xs4>
        <v-combobox 
          v-model="sortselect"
          :items="sorts"
          label="並び替え"
        ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout >
        <v-flex>
            表をがんばって作る
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Result",
  data: () => ({
    sortselect: '価格の安い順',
    sorts: ['価格の安い順', '所要時間の短い順', 'おすすめ順']
  })
};
</script>

<style scoped lang="scss">
</style>
