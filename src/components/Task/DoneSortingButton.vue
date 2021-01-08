<template>
    <v-btn
      @click="$store.commit('toggleSorting')"
      class="done-sorting-button"
      color="primary"
    >
        Done Sorting
    </v-btn>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>
.done-sorting-button
    position: fixed
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
</style>