<template>
    <div>
      <h1 class="title">Información de Contactos</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre y Apellido</th>
            <th>Correo</th>
            <th>Departamento</th>
            <th>Nombre Mascota</th>
            <th>Raza</th>
            <th>Edad Mascota</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(dato, index) in datos" :key="index">
                <td>{{ dato.nombre }}</td>
                <td>{{ dato.correo }}</td>
                <td>{{ dato.direccion }}</td>
                <td>{{ dato.nomreMascota }}</td>
                <td>{{ dato.raza }}</td>
                <td>{{ dato.edadMascota }}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        datos: []
      };
    },
    mounted() {
      this.obtenerDatosLocalStorage();
    },
    methods: {
      obtenerDatosLocalStorage() {
        const datosLocalStorage = localStorage.getItem('datos');
        if (datosLocalStorage) {
          this.datos = JSON.parse(datosLocalStorage);
        }
      }
    }
  };
</script>
  
  
<style scoped>
    @font-face {
        font-family: 'CatPaw';
        src: url('../assets/Cat paw.ttf') format('truetype');
    }
    .title {
        font-family: 'CatPaw', sans-serif;
        /* Otros estilos para tu título */
    }
    /* Estilos específicos para este componente */
    .title {
    font-family: 'CatPaw', cursive;
    font-size: 40px; /* Tamaño de fuente */
    color: #ff33eb; /* Color del texto */
    text-transform: uppercase; /* Convertir el texto a mayúsculas */
    letter-spacing: 2px; /* Espaciado entre letras */
    margin-top: 20px; /* Margen superior */
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
    
    th, td {
        border: 1px solid #f200ff;
        padding: 8px;
        text-align: left;
    }
    
    th {
        background-color: #f585ff;
    }
</style>
  