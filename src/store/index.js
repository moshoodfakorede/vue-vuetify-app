import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
        { id: 1, title: 'Eat', completed: false },
        { id: 2, title: 'Sleep', completed: false },
        { id: 3, title: 'Code', completed: false },
        { id: 4, title: 'Repeat', completed: false },
    ]
  },
  mutations: {
    addTask(state, newTaskTitle) {
        let newTask = {
         id: Date.now(),
         title: newTaskTitle,
         completed: false
        }
 
        state.tasks.push(newTask)
    },
    completeTask(state, id) {
        let task = state.tasks.filter(task => task.id === id)[0]
        task.completed = !task.completed
    },
    deleteTask(state, id) {
        state.tasks = state.tasks.filter(task => task.id !== id)
    },
  },
  actions: {},
  getters: {},
});
