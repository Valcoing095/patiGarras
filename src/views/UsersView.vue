<template>
    <div>
      <UserComponent/>
    </div>
  </template>
  
  <script>
  import UserComponent from '@/components/UsersComponent.vue';
  
  export default {
    name: 'UsersView',
    components: {
        UserComponent,
    },
    props: {
    nombre: String,
    apellido: String
  }
  };
  </script>
  