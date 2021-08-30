<template>
    <div id="footer" class="container-fluid bg-dark">
        <h3>Contactanos a nuestras redes</h3>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter"></i>
    </div>  
</template>

<script>
export default {
    name:'Footer'

}
</script>

<style scoped>
div{
    color: white;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
h3{
    font-size: 1.5rem;
}
i{
    margin: 10px 20px;
}
</style>