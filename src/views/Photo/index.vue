<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    name: "Photo",
    data () {
      return {
        headers: [
          {
            text: 'Time',
            align: 'left',
            sortable: false,
            value: 'time'
          },
          { text: 'recommend1', value: 'recommend1' },
          { text: 'recommend2', value: 'recommend2' }
          
        ],
        Time: [
          {
            value: false,
            name: '1hr',
            recommend1: 'https://re-lief.net/wp-content/uploads/slw8.jpg',
            recommend2: 'https://img.guide.travel.co.jp/article/704/23355/0983203EB7A84B1FB9F886D0D2D8E7D3_LL.jpg'
          },
          {
            value: false,
            name: '3hr',
            recommend1: 'https://img.4travel.jp/img/tcs/t/tips/pict/src/134/256/src_13425659.jpg',
            recommend2: 'https://blogimg.goo.ne.jp/user_image/3d/8f/1f671d96235490578b40e508ac505625.jpg'

          },
          {
            value: false,
            name: '12hr',
            recommend1: 'https://www.ab-road.net/CSP/img/INF/CITY/L/SEL/C00005_x.jpgroad.net%2fCSP%2fimg%2fINF%2fCITY%2fL%2fSEL%2fC00005_x.jpg&exph=346&expw=519&q=%e3%82%bd%e3%82%a6%e3%83%ab%e8%a6%b3%e5%85%89&simid=608050574551287668&selectedIndex=1&ajaxhist=0',
            recommend2: 'https://tmyun.com/jpeg/yun_4879.jpg'

          }
        ]
      }
    }
  }
</script>