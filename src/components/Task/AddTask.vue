<template>
    <v-text-field 
        v-model="newTaskTitle" 
        @keyup.enter="addTask"
        class="pa-3"
        outlined
        label="Add Task"
        hide-details 
        clearable
    >
      <template v-slot:append>
        <v-icon
          @click="addTask"
          color="primary"
          :disabled="taskInvalid"
        >
          mdi-plus
        </v-icon>
      </template>
    </v-text-field>
</template>

<script>
    export default {
        data: () => ({
            newTaskTitle: '',
        }),
        computed: {
            taskInvalid() {
                return !this.newTaskTitle
            }
        },
        methods: {
            addTask(){
                if(!this.taskInvalid) {
                    this.$store.dispatch('addTask', this.newTaskTitle)
                    this.newTaskTitle = ''
                }
            },
        }
    }
</script>

<style scoped>

</style>