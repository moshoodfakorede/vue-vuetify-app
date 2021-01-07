import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: process.env.VUE_APP_NAME,
    search: null,
    tasks: [
        { id: 1, title: 'Eat', completed: false, dueDate: '2021-01-07' },
        { id: 2, title: 'Sleep', completed: false, dueDate: '2021-01-08' },
        { id: 3, title: 'Code', completed: false, dueDate: '2021-01-09' },
        { id: 4, title: 'Repeat', completed: false, dueDate: null },
    ],
    snackbar: {
        show: false,
        text: ''
    },
  },
  mutations: {
    setSearch(state, value) {
        state.search = value
    },
    addTask(state, newTaskTitle) {
        let newTask = {
         id: Date.now(),
         title: newTaskTitle,
         completed: false,
         dueDate: null
        }
 
        state.tasks.push(newTask)
    },
    updateTask(state, payload) {
        let task = state.tasks.filter(task => task.id === payload.id)[0]
        task.title = payload.title
    },
    completeTask(state, id) {
        let task = state.tasks.filter(task => task.id === id)[0]
        task.completed = !task.completed
    },
    deleteTask(state, id) {
        state.tasks = state.tasks.filter(task => task.id !== id)
    },
    updateDueDate(state, payload) {
        let task = state.tasks.filter(task => task.id === payload.id)[0]
        task.dueDate = payload.dueDate
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
    updateTask({ commit}, payload) {
        commit('updateTask', payload)
        commit('showSnackbar', 'Task Updated!')
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
        commit('showSnackbar', 'Task Deleted!')
    },
    updateDueDate({ commit }, payload) {
        commit('updateDueDate', payload)
        commit('showSnackbar', 'Due Date Updated!')
    }
  },
  getters: {
    filteredTasks(state) {
        if(!state.search) {
            return state.tasks
        }
        return state.tasks.filter(task => {
            return task.title.toLowerCase().includes(state.search.toLowerCase())
        })
    }
  },
});
