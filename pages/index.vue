<template>
  <div class="bg"> 
    <br>
    <br>
    <br>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://media.aws.alkosto.com/media/banners/AK-PPAL-5-ACC-PP-APPLE-WATCHS3&S4-MAYO-1.jpg"
      ></b-carousel-slide>
      <b-carousel-slide img-src="https://media.aws.alkosto.com/media/banners/crema-celu-ak2.jpg">
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://media.aws.alkosto.com/media/banners/AK-TV-SAMSUNG-58NU7100-%C2%A0PPAL1-1-MAYO.jpg"
      ></b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://media.aws.alkosto.com/media/banners/AK-Lenovo-330-A6-Grcomputadoresytablets_01mayo.jpg"
          alt="image slot"
        >
      </b-carousel-slide>
      
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://media.aws.alkosto.com/media/banners/AK-PPAL-DEPORTES-01MAY-D.jpg "
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
  <!--div>
        <h1>holi {{ msg }}</h1>
        <input type="text" v-model="msg">
        <button @click="guerdar" class="btn btn-primary">Guardar</button>
        <b-button variant="primary">Guardar</b-button>
        <table>
            <tr>
                <th>Nombre</th>
            </tr>
            <tr v-for="(item, index) in municipios" :key="index">
                <td>{{item}}</td>
            </tr>
        </table>
  </div-->
</template>

<script>
import navbar from "../components/navbar";
//import contacto from './contacto'

export default {
  components: { navbar },
  data() {
    return {
      msg: "Esteban",
      municipios: ["Mocoa", "Villa", "Puerto"]
    };
  },
  methods: {
    guerdar() {
      this.municipios.push(this.msg);
      this.msg = "";
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
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>

