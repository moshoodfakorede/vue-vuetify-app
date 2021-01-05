<template>
  <div class="home">
    <v-text-field 
        v-model="newTaskTitle" 
        @click:append="addTask" 
        @keyup.enter="addTask"
        class="pa-3"
        outlined
        label="Add Task"
        append-icon="mdi-plus" 
        hide-details 
        clearable
    ></v-text-field>
    <v-list 
      v-if="tasks.length"
      class="pt-0"
      flat
    >
    <div v-for="(task, i) in tasks" :key="i">
        <v-list-item 
          @click="completeTask(task.id)" 
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
                  @click.stop="deleteTask(task.id)" 
                  icon
                >
                    <v-icon color="primary lighten-1">mdi-delete</v-icon>
                </v-btn>
            </v-list-item-action>

            </template>

        </v-list-item>
        <v-divider></v-divider>
    </div>
    </v-list>
    <div 
      v-else 
      class="no-tasks"
    >
        <v-icon 
          size="100px" 
          color="primary">
            mdi-check
        </v-icon>
        <div class="text-h5 primary--text">No tasks</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data: () => ({
    newTaskTitle: '',
    tasks: [
        // { id: 1, title: 'Eat', completed: false },
        // { id: 2, title: 'Sleep', completed: false },
        // { id: 3, title: 'Code', completed: false },
        // { id: 4, title: 'Repeat', completed: false },
    ]
  }),
  methods: {
    addTask() {
       if (this.newTaskTitle == '') return
       let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false
       }

       this.tasks.push(newTask)
       this.newTaskTitle = ''
    },
    completeTask(id) {
      let task = this.tasks.filter(task => task.id === id)[0]
      task.completed = !task.completed
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
  }
};
</script>

<style scoped>
 .no-tasks {
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   opacity: 0.5;
 }
</style>
