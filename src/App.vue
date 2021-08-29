<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'formulario'}">Agregar producto</router-link>|
      <router-link :to="{name:'catalogo',params:{contenedor: this.contenedor}}">Catálogo</router-link>|
      <router-link :to="{name:'carrito'}">Carrito</router-link>
      
    </div>
    <router-view  @agregar='agregar'  />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
        nombreProducto:'',
        modelo:'',
        url:'',
        contenedor:[{
            id:1,
            nombreProducto:'Cámara Canon ',
            modelo:'EOS-2000D',
            cantidad: 3,
            url:'https://amielectromercado.com/690-large_default/canon-camara-eos-2000d-18-55islp-e10.jpg'
        },
        {
            id:2,
            nombreProducto:'Cámara Canon',
            modelo:'EOS-6D',
            cantidad:3,
            url:'https://www.canon.es/media/EOS-6D_Default_tcm86-965776.jpg'
        },
        {
            id:3,
            nombreProducto:'Cámara Canon',
            modelo:'EOS-6D',
            cantidad:3,
            url:'https://m.media-amazon.com/images/I/71aAr9jv+VL._AC_SL1500_.jpg'
        }],
    }
  },
  methods:{
    agregar(data){
      console.log(data)
      this.contenedor.push(data)
    }
  },
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
