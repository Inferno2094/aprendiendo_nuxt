<template>
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Ingreso de Nuevas Categorias</h1>
        </div>
      </div>
      <form name="frmdatos" @submit.prevent="guerdarCategoria">
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="form.categoria"
                placeholder="Ingresa una Nueva Categoria"
                name="categoria"
                id="categoria"
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <br>  
            <b-button v-if="guardado" type="submit" variant="primary">Guardar</b-button>
            <b-spinner v-if="guardando" label="Loading..."></b-spinner>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../../services/firebase";

export default {
  data() {
    return {
      form: {
        categoria: ""
      },

      guardado: true,
      guardando: false
    };
  },
  methods: {
    guerdarCategoria() {
      this.guardado = false;
      this.guardando = true;
      db.collection("categorias")
        .add(this.form)
        .then(res => {
          this.$router.push({
            path: "/categorias"
          });
        });
    }
  }
};
</script>

<style>
body,
html {
  height: 100%;
}
.bg {
  /* The image used */
  background-image: url("https://st3.depositphotos.com/1049573/15331/v/1600/depositphotos_153312080-stock-illustration-white-abstract-geometric-seamless-pattern.jpg");

  /* Half height */
  height: 50%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
