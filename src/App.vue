<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <router-link to="/" class="navbar-brand" href="#">CameraShop</router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                to="/"
                                class="nav-link active"
                                aria-current="page"
                                >Home</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'formulario' }"
                                class="nav-link"
                                >Agregar producto</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                :to="{
                                    name: 'catalogo',
                                    params: { contenedor: this.contenedor },
                                }"
                                class="nav-link"
                                >Catálogo</router-link
                            >
                        </li>
                        <!-- <li class="nav-item">
                            <router-link
                                :to="{ name: 'carrito' }"
                                class="nav-link"
                                >Carrito</router-link
                            >
                        </li> -->
                    </ul>
                    <form class="d-flex mx-3">
                        <router-link
                            :to="{ name: 'carrito' }"
                            type="button"
                            class="btn btn-primary position-relative "
                        >
                            <i class="bi bi-basket"></i>
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            >
                                {{ carrito.length }}
                                <span class="visually-hidden"
                                    >unread messages</span
                                >
                            </span>
                        </router-link>
                        
                    </form>
                </div>
            </div>
        </nav>
        <router-view @agregar="agregar" />

        <!-- boton contador de carrito  -->

        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link :to="{ name: 'formulario' }"
                >Agregar producto</router-link
            >|
            <router-link
                :to="{
                    name: 'catalogo',
                    params: { contenedor: this.contenedor },
                }"
                >Catálogo</router-link
            >|
            <router-link :to="{ name: 'carrito' }">Carrito</router-link>
        </div>
        <router-view @agregar="agregar" /> -->
        <Footer />
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import { mapState } from "vuex";
export default {
    name: "App",
    components: { Footer},
    data() {
        return {
            nombreProducto: "",
            modelo: "",
            url: "",
            contenedor: [
                {
                    id: 1,
                    nombreProducto: "Cámara Canon ",
                    modelo: "EOS-R5",
                    cantidad: 1,
                    url:
                        "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b",
                },
                {
                    id: 2,
                    nombreProducto: "Cámara Canon",
                    modelo: "EOS-T100",
                    cantidad: 1,
                    url:
                        "https://falabella.scene7.com/is/image/Falabella/6886486_1?wid=800&hei=800&qlt=70",
                },
                {
                    id: 3,
                    nombreProducto: "Cámara Canon",
                    modelo: "REBELD SL3",
                    cantidad: 1,
                    url:
                        "https://www.pcfactory.cl/public/foto/41160/1_500.jpg?t=1615581638",
                },
            ],
        };
    },
    methods: {
        agregar(data) {
            console.log(data);
            this.contenedor.push(data);
        },
    },
    computed: {
        ...mapState(["carrito"]),
    },
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
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
