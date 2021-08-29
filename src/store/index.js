import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito: [],
    nombre: ''

  },
  getters: {
  },
  mutations: {
    addCarrito(state, datos) {
      

      let { id, data } = datos;
      
      let compra = data.filter(item => item.id == id)
      // console.log(state.carrito.find(item => item.id == compra[0].id))
      // if(data.find(item => compra[0].id == item.id) )
      if(state.carrito.find(item => item.id == compra[0].id)== undefined){
        state.carrito.push(compra[0])
        
      }else{
        let modCarrito =state.carrito.find(item => item.id == compra[0].id)
        modCarrito.cantidad ++
      }
      
    },
    deleteCarrito(state, idProducto){
      console.log(state.carrito, idProducto)

      let dataEliminar = state.carrito.filter(item => idProducto != item.id)
      console.log(dataEliminar)
      state.carrito = dataEliminar

      // console.log(dato.carrito[0].cantidad)
    }
  },
  actions: {
  },
  modules: {
  }
})
