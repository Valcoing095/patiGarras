<template>
    <div>
      <h1 class="title">Información de Contactos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contact, index) in contactList" :key="index">
            <td>{{ contact.nombre }}</td>
            <td>{{ contact.apellido }}</td>
            <td>{{ contact.telefono }}</td>
            <td>{{ contact.direccion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserComponent',
    props: {
    data() {
      return {
        contactList: [
          { nombre: 'Juan', apellido: 'Pérez', telefono: '123-456-7890', direccion: 'Calle Principal 123' },
          { nombre: 'María', apellido: 'González', telefono: '987-654-3210', direccion: 'Avenida Central 456' },
          // Agrega más contactos aquí...
        ]
      };
    }
        }
    }
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
  