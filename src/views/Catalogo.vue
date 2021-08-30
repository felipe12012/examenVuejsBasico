<template>
    <div class="container my-5">
        <h1 class="mb-5">catalogo</h1>

       
        <Card class="row d-flex justify-content-between" :contenedor="this.contenedor" />
    </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
    components: { Card },
    name: "catalogo",
    props: ["contenedor"],
    component: Card,
    methods: {
        data() {
            console.log(this.contenedor);
        },
    },
};
</script>

<style>
h1{text-align: center;}
</style>
