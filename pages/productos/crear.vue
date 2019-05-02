<template>
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Ingreso de Nuevos Productos</h1>
        </div>
      </div>
      <form name="frmdatos" @submit.prevent="guerdarProducto">
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="imagen">IMAGEN</label>
              <input
                type="file"
                class="form-control"
                placeholder="Carga Una Imagen"
                name="imagen"
                id="imagen"
              >
            </div>
            <div class="form-group">
              <label for="nombre">Nombre del Producto:</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="form.nombre"
                placeholder="Ingresa el nombre del producto"
                name="nombre"
                id="nombre"
              >
            </div>
            <div class="form-group">
              <label for="precio">PRECIO:</label>
              <input
                type="number"
                class="form-control"
                required
                v-model="form.precio"
                placeholder="Ingresa Precio"
                name="precio"
                id="precio"
              >
            </div>
            <div class="form-group">
              <label for="cantidad">CANTIDAD:</label>
              <input
                type="number"
                class="form-control"
                required
                v-model="form.cantidad"
                placeholder="Ingresa la Cantidad"
                name="cantidad"
                id="cantidad"
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
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
        nombre: "",
        cantidad: "",
        precio: ""
      },

      guardado: true,
      guardando: false
    };
  },
  methods: {
    guerdarProducto() {
      this.guardado = false;
      this.guardando = true;
      db.collection("productos")
        .add(this.form)
        .then(res => {
          this.$router.push({
            path: "/productos"
          });
        });
    }
  }
};
</script>

<style>
  body, html {
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