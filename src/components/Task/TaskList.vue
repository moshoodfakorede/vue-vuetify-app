<template>
    <v-list 
      class="pt-0"
      flat
    >
    <draggable 
      v-model="tasks"
      handle=".handle"
    >
      <task 
        v-for="(task, i) in tasks" 
        :key="i" 
        :task="task"
      />
    </draggable>
    </v-list>
</template>

<script>
import draggable from 'vuedraggable'
import Task from '@/components/Task/Task'
    export default {
        components: {
            draggable,
            Task
        },
        computed: {
            tasks: {
                get() {
                    return this.$store.getters.filteredTasks
                },
                set(value) {
                    this.$store.dispatch('setTasks', value)
                }
            }
        }
    }
</script>