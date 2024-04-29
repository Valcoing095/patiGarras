<template>
    <div>
      <!-- <UserComponent :nombre="nombreProp" :apellido="apellidoProp"/> -->
      <UserComponent :contactList="contactos"></UserComponent>
    </div>
    
  </template>
  
<script>
import UserComponent from '../components/UsersComponent.vue';

export default {
//   name: 'UserComponent',
  components: {
   UserComponent
},
data() {
return {
contactos: [
    { nombre: 'Ana', apellido: 'Torres', telefono: '123-456-7890', direccion: 'Calle Falsa 123' },
    { nombre: 'Luis', apellido: 'Gomez', telefono: '098-765-4321', direccion: 'Avenida Siempre Viva 456' },
    { nombre: 'Carlos', apellido: 'Perez', telefono: '555-555-5555', direccion: 'Boulevard de los Sueños Rotos 789' }
    // Puedes agregar más contactos aquí
]
};
}
};

</script>
  