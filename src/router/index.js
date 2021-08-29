import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: () => import('../views/Catalogo.vue'),
    props: true
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import('../views/Carrito.vue'),
    props: true
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../views/Formulario.vue'),
    props: true,
  

  },

]

const router = new VueRouter({
  routes
})

export default router
