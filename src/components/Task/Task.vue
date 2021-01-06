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
            <v-list-item-action>
                <v-btn 
                  @click.stop="dialogs.delete = true" 
                  icon
                >
                    <v-icon color="primary lighten-1">mdi-delete</v-icon>
                </v-btn>
            </v-list-item-action>

            </template>

        </v-list-item>
        <v-divider></v-divider>

        <delete-dialog 
          v-if="dialogs.delete"
          :task="task" 
          @closeDialog="dialogs.delete = false" 
         />
    </div>
</template>

<script>
    export default {
      props: ['task'],
      components: {
          'delete-dialog': require('@/components/Task/Dialogs/DeleteDialog.vue').default
      },
      data: () => ({
          dialogs: {
            delete: false
          }
      })
    }
</script>