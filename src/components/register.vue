<template>
    <div id="registro">
        <div id="texto">
            <h5 class="form_h5">Por favor, complete cada campo con precisión y detalle. La información
                proporcionada será utilizada exclusivamente para los fines indicados y
                se manejará con la debida confidencialidad.
            </h5>
        </div>
        <section id="s1">

          <label for="nombre" >Nombre de usuario </label>
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
template {
    background: linear-gradient(150deg, #cf93cf, #A220DF );
    height: 100vh;
    display: flex;
}
#registro {
    position: absolute;
    top: 25%;
    left: 40%;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    background-color: white;
    width: 60%;
    max-width: 400px;
    padding: 1em 2.6em;
    border-radius: 48px;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 90%);
    text-align: center;
}
.form_h2 {
    font-size: 2rem;
    margin-bottom: .5em;
}
.form_h5 {
    
    font-size: 0.9rem;
    margin-bottom: 3em;
}
.form_h5_2 {
    text-align:  start;
    font-size: 0.9rem;
    margin-bottom: 1em;
}
.form_contenedor {
    margin-top: 3em;
    display: grid;
    gap: 1em;
}
.form_group_nusuario {
    position: relative;
    --color: #A59EAA;
}
.form_input {
    width: 100%;
    background: none;
    color: #0A0909;
    font-size: 1rem;
    padding: .6em .3em;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color);
    font-family: "Edu NSW ACT Foundation", cursive;
}

.form_input:focus + .form_label,
.form_input:not(:placeholder-shown) + .form_label {
    transform: translateY(-12px) scale(.7);
    transform-origin: left top;
    color: #A220DF;
}

.form_label {
    color:  var(--color);
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 5px;
    transform: translateY(10px);
    transition: transform .5s, color .3s;
}
.form_submit {
    height: 40px;
    border: 1px solid white;
    color: white;
    background: #cf93cf;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
}
.form_submit:hover {
    border-color: #cf93cf;
    color: #cf93cf;
    background: white;
    transition: .20s; 
}
.form_submit a {
    color: white;
    text-decoration: none;
}
.form_submit a:hover {
    color: #cf93cf;
}
/* @media screen (max-width:425px) {
    .form_h2 {font-size: 1.2rem;}
 } */
</style>
