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

//  export default {
//   props: {
//     nombre: String,
//     apellido: String,
//     ['contact.nombre', 'contact.apellido', 'contact.telefono', 'contact.direccion' ]
//   }
export default {
  name: 'UserComponent',
  props: {
    contactList: Array
  }
  // Otras opciones del componente como data, methods, etc.
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
  font-size: 55px; /* Tamaño de fuente */
  color: #ff33eb; /* Color del texto */
  text-shadow: 0px 5px 2px #4b014f;
  text-transform: uppercase; /* Convertir el texto a mayúsculas */
  letter-spacing: 2px; /* Espaciado entre letras */
  margin-top: 20px; /* Margen superior */
}

  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #4b014f;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f585ff;
  }
  </style>
  