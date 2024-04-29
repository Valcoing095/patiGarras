<template>
    <div id="c2">
        <section>
            <UserComponent />
        </section>
    </div>
  </template>
  
  <script>
    import UserComponent from '@/components/UsersComponent.vue'
  
    export default {
    name: 'UsersView',
  
    components: {
        UserComponent,
    },
  }
  </script>
  
  <style scoped>
    #c2 {
      border: groove;
    }
  </style>