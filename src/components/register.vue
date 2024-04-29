<template>
    <div id="registro">
        <div id="texto">
            <p>Registrate</p>
            <br><br>
            <p>Por favor, complete cada campo con precisión y detalle. La información
                proporcionada será utilizada exclusivamente para los fines indicados y
                se manejará con la debida confidencialidad.
            </p>
        </div>
        <section id="s1">

          <label for="nombre">Nombre de usuario </label>
          <input id="nombre" type="text"  v-model="Person.nombre">
          <br><br>

          <label for="correo">Correo </label>
          <input id="correo" type="correo" v-model="Person.correo">
          <br><br>

          <label for="nmascota">Nombre de mascota </label>
          <input id="nmascota" type="text"  v-model="Person.nmascota">
          <br><br>

          <label for="raza">Raza</label>
          <input id="raza" type="text"  v-model="Person.raza">
          <br><br>

          <label for="edad">Edad de la mascota</label>
          <input id="edad" type="number" min="1" max="18" v-model="Person.edad">
          <br><br>

          <label for="dresidencia">Departamento de residencia</label>
          <input id="dresidencia" type="text"  v-model="Person.dresidencia">
          <br><br>
          
          <label for="password">contraseña</label>
          <input id="password" type="password"  v-model="Person.password">
          <br><br>

          <label for="password">Repetir contraseña</label>
          <input id="password" type="password"  v-model="Person.password">
          <br><br>
          <br>
          <br>
    
        </section>
    </div>
    <div>
        <h5 class="texto2">
            <li>Complete todos los campos obligatorios (*).</li>
            <li>Proporcione información precisa y actualizada.</li>
            <li>Utilice el formato solicitado para fechas, números y otros datos específicos.</li>
        </h5>
    </div>
</template>

<script>
export default {
  name: 'register',

  setup(){

    // Variables
    let Person = {
            nombre: '',
            correo: '',
            nmascota: '',
            raza:'',
            edad: null,
            dresidencia:'',
            password:'',          
    };

    return {
      Person,
    };
  },
}
</script>

<style scoped>

</style>
