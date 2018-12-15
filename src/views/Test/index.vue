<template>
  <gantt-elastic :tasks="tasks" :options="options">
  </gantt-elastic>
</template>

<script>
import Vue from 'vue';
import GanttElastic from "gantt-elastic/src/GanttElastic.vue";

export default {
  name: 'Test',
  data: () => {
   return {
      tasks: [{id: 1, label: 'flight', start: '2018-10-04T21:00:00', duration: '3600', type: 'project'}],
      options: ""
    }
  }
}
</script>