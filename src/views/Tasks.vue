<template>
  <div class="home">
    <task-list v-if="$store.state.tasks.length" />
    <no-tasks v-else />

    <done-sorting-button v-if="$store.state.sorting" />
  </div>
</template>

<script>
import TaskList from '@/components/Task/TaskList'
import NoTasks from '@/components/Task/NoTasks.vue';
import DoneSortingButton from '@/components/Task/DoneSortingButton.vue';
export default {
  name: "Home",
  components: {
    NoTasks,
    TaskList,
    DoneSortingButton
  },
};
</script>