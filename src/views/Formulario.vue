<template>
    <div class="container my-5">
        <h2 class="font-weight-bold mb-5">Agregar Producto</h2>
        <div class="row">
            <form class="col-6 ">
                <div class="my-3 pr-3">
                    <label for="nombre">Nombre de producto</label>
                    <input
                        class="form-control"
                        v-model="nombreProducto"
                        type="text"
                        name="nombreProducto"
                        id="nombre"
                        placeholder="Nombre Producto"
                    />
                </div>
                <div class="my-3 pr-3">
                    <label for="modelo">Modelo</label>
                    <input
                        class="form-control"
                        v-model="modelo"
                        type="text"
                        name="modelo"
                        id="modelo"
                        placeholder="Modelo"
                    />
                </div>
                <div class="my-3 pr-3">
                    <label for="cantidad">Cantidad</label>
                    <input
                        class="form-control"
                        v-model="cantidad"
                        type="text"
                        name="cantidad"
                        id="cantidad"
                        placeholder="Cantidad"
                    />
                </div>
                <div class="my-3 pr-3">
                    <label for="url">url de producto</label>
                    <input
                        class="form-control"
                        v-model="url"
                        type="text"
                        name="url"
                        id="url"
                        placeholder="Ej:https://www.images.com/image.jpg"
                    />
                </div>
                <button
                    class="btn btn-outline-success btn-lg"
                    type="button"
                    @click="agregarProducto"
                >
                    Agregar
                </button>
            </form>

            <div class="col-6 d-flex justify-content-center align-items-center">
                <div class="card" style="width: 18rem">
                    <div v-if="this.url == ''">
                        <h2 class="fas fa-camera fa-2x card-img-top"></h2>
                    </div>
                    <div v-else>
                        <img
                            :src="this.url"
                            class="card-img-top"
                            :alt="this.modelo"
                        />
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">
                            {{ this.nombreProducto + " " + this.modelo }}
                        </h5>
                        <!-- <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Formulario",
    props: ["agregar"],
    data() {
        return {
            nombreProducto: "",
            modelo: "",
            url: "",
            cantidad: "",
        };
    },
    methods: {
        agregarProducto() {
            let id = Math.floor(Math.random() * 1000000);
            let producto = {
                id: id,
                nombreProducto: this.nombreProducto,
                modelo: this.modelo,
                url: this.url,
                cantidad: this.cantidad,
            };

            this.$emit("agregar", producto);

            this.nombreProducto = "";
            this.modelo = "";
            this.url = "";
            this.cantidad = "";
            // this.agregar(producto)
        },
    },
};
</script>

<style>
h2 {
    height: 1.5rem;
    text-align: center;
}
</style>
