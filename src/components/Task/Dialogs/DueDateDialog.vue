<template>
    <v-dialog
        ref="dialog"
        :value="true"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            @click="$emit('closeDialog')"
            text
            color="primary"
          >
            Cancel
          </v-btn>
          <v-btn
            @click="saveDate"
            text
            color="primary"
          >
            OK
          </v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script>
    export default {
        props: ['task'],
        data: () => ({
          date: null,
        }),
        mounted() {
            if(this.task.dueDate) {
                this.date = this.task.dueDate
            }
        },
        methods: {
            saveDate() {
                let payload = {
                    id: this.task.id,
                    dueDate: this.date
                }

                this.$store.dispatch('updateDueDate', payload)
                this.$emit('closeDialog')
            }
        }
    }
</script>