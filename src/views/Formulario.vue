<template>
    <form class="col-3 ms-3">
        <h2 class="fas fa-camera fa-2x"></h2>
        <h4 class="font-weight-bold text-center">Agregar Producto</h4>
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
</template>

<script>
export default {
    name: "Formulario",
    props: ['agregar'],
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
            let id = Math.floor(Math.random()*1000000)
            let producto = {
                id:id,
                nombreProducto: this.nombreProducto,
                modelo: this.modelo,
                url: this.url,
                cantidad: this.cantidad,
            };

            this.$emit("agregar", producto);
            // this.agregar(producto)
        },
    },
};
</script>
