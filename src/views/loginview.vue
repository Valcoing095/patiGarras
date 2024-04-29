<template>
    <div class="login">
        <logincomponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import logincomponent from '@/components/logincomponent.vue'
  
  export default {
    name: 'loginview',
    components: {
        logincomponent
    }
  }
  </script>
  