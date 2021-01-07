<template>
    <v-list 
      class="pt-0"
      flat
    >
      <task 
        v-for="(task, i) in $store.getters.filteredTasks" 
        :key="i" 
        :task="task"
      />
    </v-list>
</template>

<script>
import Task from '@/components/Task/Task'
    export default {
        components: {
            Task
        }
    }
</script>