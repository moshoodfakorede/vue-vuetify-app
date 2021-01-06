<template>
    <div>
        <v-list-item 
          @click="$store.commit('completeTask', task.id)" 
          :class="{ 'blue lighten-5': task.completed }"
        >
            <template v-slot:default>
            <v-list-item-action>
                <v-checkbox
                :input-value="task.completed"
                color="primary"
                ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title 
                  :class="{ 'text-decoration-line-through': task.completed }"
                >{{ task.title }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action v-if="task.dueDate">
                <v-list-item-action-text>
                    <v-icon small>mdi-calendar</v-icon>
                    {{ task.dueDate | prettyDate }}
                </v-list-item-action-text>
            </v-list-item-action>

            <v-list-item-action>
                <task-menu :task="task" />
            </v-list-item-action>

            </template>

        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>
    import { format } from 'date-fns'
    export default {
      props: ['task'],
      filters: {
        prettyDate(date) {
            return format(new Date(date), 'MMM d')
        }
      },
      components: {
        'task-menu': require('@/components/Task/TaskMenu.vue').default
      },
    }
</script>