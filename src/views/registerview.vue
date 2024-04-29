<template>
    <div id="c2">
        <section>
            <register />
        </section>
    </div>
  </template>
  
  <script>
    import register from '@/components/register.vue'
  
    export default {
    name: 'registerview',
  
    components: {
        register,
    },
  } // Cierra el Export default
  </script>
  
  <style scoped>
    #c2 {
      border: groove;
    }
  </style>