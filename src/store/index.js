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
    ],
    snackbar: {
        show: false,
        text: ''
    },
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
    showSnackbar(state, text) {
        let timeout = 0
        if(state.snackbar.show) {
            state.snackbar.show = false
            timeout = 300
        }

        setTimeout(() => {
            state.snackbar.show = true
            state.snackbar.text = text
        }, timeout)
    },
    hideSnackbar(state) {
        state.snackbar.show = false
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
        commit('addTask', newTaskTitle)
        commit('showSnackbar', 'New Task Added!')
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
        commit('showSnackbar', 'Task Deleted!')
    },
  },
  getters: {},
});
