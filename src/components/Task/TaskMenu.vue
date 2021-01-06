<template>
<div>
    <v-menu
        bottom
        left
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="handleClick(i)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

    <edit-dialog 
      v-if="dialogs.edit"
      :task="task" 
      @closeDialog="dialogs.edit = false" />

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
        'edit-dialog': require('@/components/Task/Dialogs/EditDialog.vue').default,
        'delete-dialog': require('@/components/Task/Dialogs/DeleteDialog.vue').default,
      },
      data: () => ({
        dialogs: {
          edit: false,
          delete: false
        },
        items: [
            { 
                title: 'Edit', 
                icon: 'mdi-pencil', 
                click() { this.dialogs.edit = true }
            },
            { 
                title: 'Due date', 
                icon: 'mdi-calendar', 
                click() {} 
            },
            { 
                title: 'Delete',
                icon: 'mdi-delete', 
                click() { this.dialogs.delete = true }
            },
        ],
      }),
      methods: {
        handleClick(index) {
          this.items[index].click.call(this)
        }
      }
    }
</script>