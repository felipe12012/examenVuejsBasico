<template>
  <div class="hello" >
    <h1>{{ msg }}</h1>
    <h2> {{ $store.state.productos }} </h2>
    <h2 class="my-3 pr-3">Canon eos 6D
      <img class="my-3 pr-3" src="../assets/canon-eos-6D.jpg">
    </h2>
    <h2 class="my-3 pr-3">Canon eos 2000D
      <img class="my-3 pr-3" src="../assets/canon_eos_2000D.jpg">
    </h2>
    <h2 class="my-3 pr-3">Canon eos 800D
      <img class="my-3 pr-3" src="../assets/canon-eos-800d.jpg">
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
   
  }
}
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
