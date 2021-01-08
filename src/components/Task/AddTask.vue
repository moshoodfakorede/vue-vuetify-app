<template>
    <v-text-field 
        v-model="newTaskTitle" 
        @keyup.enter="addTask"
        class="add-task pa-3"
        outlined
        placeholder="Add Task"
        hide-details 
        clearable
    >
      <template v-slot:append>
        <v-icon
          @click="addTask"
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

<style lang="sass">
.add-task.v-input--is-focused
    .v-input__slot
        background: rgba(31,94,129,0.5) !important
</style>