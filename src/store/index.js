import Vue from "vue";
import Vuex from "vuex";
import Localbase from 'localbase';

let db = new Localbase('tasks_db');
db.config.debug = false

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: process.env.VUE_APP_NAME,
    search: null,
    tasks: [],
    snackbar: {
        show: false,
        text: ''
    },
    sorting: false
  },
  mutations: {
    setSearch(state, value) {
        state.search = value
    },
    addTask(state, newTask) {
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
    setTasks(state, tasks) {
        state.tasks = tasks
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
    },
    toggleSorting(state) {
        state.sorting = !state.sorting
    }
  },
  actions: {
    getTasks({commit}) {
        db.collection('tasks').get().then(tasks => {
            commit('setTasks', tasks)
        })
    },
    setTasks({commit}, tasks) {
        db.collection('tasks').set(tasks)
        commit('setTasks', tasks)
    },
    addTask({ commit }, newTaskTitle) {
        let newTask = {
            id: Date.now(),
            title: newTaskTitle,
            completed: false,
            dueDate: null
        }

        db.collection('tasks').add(newTask).then(() => {
            commit('addTask', newTask)
            commit('showSnackbar', 'New Task Added!')
        })
    },
    updateTask({ commit}, payload) {
        db.collection('tasks').doc({ id: payload.id }).update({
            title: payload.title
        }).then(() => {
            commit('updateTask', payload)
            commit('showSnackbar', 'Task Updated!')
        })
    },
    deleteTask({ commit }, id) {
        db.collection('tasks').doc({ id: id }).delete()
        .then(() => {
            commit('deleteTask', id)
            commit('showSnackbar', 'Task Deleted!')
        })
    },
    updateDueDate({ commit }, payload) {
        db.collection('tasks').doc({ id: payload.id }).update({
            dueDate: payload.dueDate
        }).then(() => {
            commit('updateDueDate', payload)
            commit('showSnackbar', 'Due Date Updated!')
        })
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
