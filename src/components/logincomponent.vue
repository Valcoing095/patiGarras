<template>
<div id="body_login" class="login">
    <div id="grid_formulario" class="formulario">
        <img class="logo1" src="../assets/logo-gato.png" alt="logo-patigarras">
        <h1>PATIGARRAS</h1>
        <form method="post">
            <div id="grid_camposlogin" class="camposlogin">
                <input type="text" required>
                <label>Usuario</label>
            </div><br>
            <div id="grid_camposlogin" class="camposlogin">
                <input type="password" required>
                <label>Contraseña</label>
            </div>
            <div id="grid_olvidar-registrer" class="Olvidar">Tienes Problemas para iniciar intenta dando clic en
                <a href="#">Olvide La Contraseña</a><br>         
            </div>
            <div id="botoneslogin">
                <!-- <button @click="consolLogue()">Iniciar</button>  -->
                <button><router-link to="/users">Login</router-link></button>  
                <button><router-link to="/Registrate">Registrate</router-link></button>                             
            </div><br>
        </form>
    </div>
</div>
</template>

<script>
export default{
    name: 'logincomponent',
    methods:{
        consolLogue(){
            var datos = JSON.parse(localStorage.getItem('datos')) || [];
        }
    }     
}
</script>

<style scoped>
.login{
    margin: 0;
    padding: 0%;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    background: linear-gradient(10deg, #cf93cf, #A220DF );
    height: 100vh;
}

.formulario{
    margin: 0;
    padding: 0%;
    font-family: "Edu NSW ACT Foundation", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    background: linear-gradient(150deg, #cf93cf, #A220DF );
    height: 50vh;
}
.formulario .logo1 {
    width: 100px;
    height: 100px;
    border-radius: 70%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
}
.formulario {
    position: absolute;
    top: 50%;   
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background:white;
    border-radius: 10px; 
}
.formulario h1{
    text-align: center;
    padding: 30px 0 20px 0;
    border-bottom: 1px solid silver;
}
.formulario form {
    padding: 0 40px;
    box-sizing: border-box;
}
form .camposlogin {
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px, 0;
}
.camposlogin input {
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
}
.camposlogin label {
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
}
.camposlogin span::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #A220DF;
}
.camposlogin input:focus ~ label,
.camposlogin input:focus ~ label
{
    top: -5px;
    color: #A220DF;
}
.camposlogin input:focus ~ span::before,
.camposlogin input:focus ~ span::before{
    width: 100%;
}
.Olvidar {
    margin: 30px 0px;
    text-align: center;
    font-style: 16px;
    color: black;
}
.Olvidar a {
    color: black;
    text-decoration: none;
}
.Olvidar a:hover {
    text-decoration: underline;
}

.botones button {
    width: 50%;
}
#botoneslogin a {
    color: white;
    text-decoration: none;
}
#botoneslogin a:hover {
    color: #cf93cf;
}
#botoneslogin button{
    width: 49%;
    height: 40px;
    border: 1px solid white;
    background: #cf93cf;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
}
#botoneslogin button:hover {
    border-color: #cf93cf;
    background: white;
    transition: .20s; 
}
</style>
