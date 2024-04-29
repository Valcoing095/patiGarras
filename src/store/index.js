import { createStore } from 'vuex'

export default createStore({
  state: {
    Persona: {
      nombre: '',
      correo: '',
      direccion:'',
      contraseña:'',
      nomreMascota:'',
      raza:'',
      edadMascota:'',
      codigo: '',
      },
  },
  getters: {
  },
  mutations: {
    actualizarPersona(state, newPerson) {
      state.Persona = newPerson;
    },
  },
  actions: {
    actualizarPersona({ commit }, newPerson) {
      var datos = JSON.parse(localStorage.getItem('datos')) || [];
      datos.push(newPerson);
      localStorage.setItem('datos', JSON.stringify(datos));
      alert('Dato guardado correctamente: ' + newPerson);
      location.href ="/users";
      commit('actualizarPersona', newPerson);
    },
  },
  modules: {
  }
})
