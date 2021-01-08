<template>
  <div class="home">
    <add-task />
    <task-list v-if="$store.state.tasks.length" />
    <no-tasks v-else />

    <done-sorting-button v-if="$store.state.sorting" />
  </div>
</template>

<script>
import AddTask from '@/components/Task/AddTask'
import TaskList from '@/components/Task/TaskList'
import NoTasks from '@/components/Task/NoTasks.vue';
import DoneSortingButton from '@/components/Task/DoneSortingButton.vue';
export default {
  name: "Home",
  components: {
    NoTasks,
    AddTask,
    TaskList,
    DoneSortingButton
  },
};
</script>