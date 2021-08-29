<template>
    <div class="container">
        <h1>catalogo</h1>

       
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
