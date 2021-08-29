<template>
    <div>
        <h1>carrito</h1>
        <div class="container">
            <div class="row">
                <div
                    v-for="item in carrito"
                    :key="item.id"
                    class="card mb-3"
                    style="max-width: 540px;"
                >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                :src="item.url"
                                class="img-fluid rounded-start"
                                :alt="item.modelo"
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {{
                                        item.nombreProducto + " " + item.modelo
                                    }}
                                </h5>
                                <p class="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p class="card-text">
                                    <small class="text-muted"
                                        >Cantidad disponible:
                                        {{ item.cantidad }}</small
                                    >
                                </p>
                                <button :id="item.id" class="btn btn-outline-primary" @click='eliminar'>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
    name: "carritoCompra",
    computed: {
        ...mapState(["carrito"]),
    },
    methods:{
        ...mapMutations(['deleteCarrito']),
        eliminar(e){
        //    console.log(e.target.id)
           this.deleteCarrito(e.target.id)
        }
    }
};
</script>
