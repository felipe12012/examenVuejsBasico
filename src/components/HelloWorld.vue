<template>
    <div class="hello">
        <!-- <h1>{{ msg }}</h1>
    <h2> {{ $store.state.productos }} </h2>
    <h2 class="my-3 pr-3">Canon eos 6D
      <img class="my-3 pr-3" src="../assets/canon-eos-6D.jpg">
    </h2>
    <h2 class="my-3 pr-3">Canon eos 2000D
      <img class="my-3 pr-3" src="../assets/canon_eos_2000D.jpg">
    </h2>
    <h2 class="my-3 pr-3">Canon eos 800D
      <img class="my-3 pr-3" src="../assets/canon-eos-800d.jpg">
    </h2>-->

        <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        src="https://es.hanwhasecurity.com/media/catalog/category/Analog_Camera_Banner_29.jpg"
                        class="d-block w-100"
                        alt="banner camara"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="http://www.estudionadjar.cl/arriendos/flxbanner_appplus/images/bannerCAMARAS_1170_430.jpg"
                        class="d-block w-100"
                        alt="Varias camaras"
                    />
                </div>
                <!-- <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div> -->
            </div>
        </div>

        <main class="my-5 container">
            <div class="row">
              <h2 class="col-12 mb-5">Canon eos 6D Mark II</h2>
                <div class="col-6">
                    <img
                        src="../assets/canon-eos-6D.jpg"
                        alt="canon eos 6D"
                        class="img-fluid"
                    />
                </div>
                <div class="col-6">
                    <p>
                        Con un sensor de fotograma completo y 26,2 megapíxeles,
                        la EOS 6D Mark II proporciona una calidad de imagen
                        superior, especialmente en condiciones de poca
                        iluminación. Resulta ideal para retratos y proporciona
                        control adicional sobre la profundidad de campo, además
                        de disparos en serie a 6,5 fps. Su diseño compacto y el
                        sellado de protección la convierten en la opción ideal
                        para la fotografía de paisajes profesional. Cuando la
                        combinas con este versátil objetivo zoom de 24-105 mm,
                        la EOS 6D Mark II es la cámara perfecta para viajes.
                        
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
