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
      <b-carousel-slide img-src="https://media.aws.alkosto.com/media/banners/crema-celu-ak2.jpg"></b-carousel-slide>
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

    <div></div>
    <br>
    <br>
    <br>
    <b-card-group deck>
      <div>
        <b-card
          title="Aseo"
          bg-variant="dark" 
          text-variant="white"
          img-src="http://www.globalserviciosysuministros.com/wp-content/uploads/2018/10/Diapositiva2-6.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="light">Ir...</b-button>
        </b-card>
      </div>
      <div>
        <b-card
          title="Alimentos"
          bg-variant="dark" 
          text-variant="white"
          img-src="https://i.avoz.es/default/2018/04/04/00121522865511390987291/Foto/alimentosyes.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="light">Ir...</b-button>
        </b-card>
      </div>
      <div>
        <b-card
          title="Electrodomesticos"
          bg-variant="dark" 
          text-variant="white"
          img-src="https://i.avoz.es/default/2018/04/18/00121524046006433501339/Foto/ELECTRODOMESTICOS-COSTES.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="light">Ir...</b-button>
        </b-card>
      </div>
      <div>
        <b-card
          title="Ropa"
          bg-variant="dark" 
          text-variant="white"
          img-src="https://i.ytimg.com/vi/gwm81FmI8Hw/maxresdefault.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="light">Ir...</b-button>
        </b-card>
      </div>
      <div>
        <b-card
          title="Licores"
          bg-variant="dark" 
          text-variant="white"
          img-src="https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgrancatador/b/bebidas-alcoholicas-para-celiacos-1.jpg?itok=E9cpsXmx"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="light">Ir...</b-button>
        </b-card>
      </div>
      <br>
      <div>
        <b-card
          title="Bebidas"
          bg-variant="dark" 
          text-variant="white"
          img-src="https://codigooculto.com/wp-content/uploads/2017/04/refrescos1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="light">Ir...</b-button>
        </b-card>
      </div>
      <div>
        <b-card
          title="Juguetes"
          bg-variant="dark" 
          text-variant="white"
          img-src="https://i.avoz.es/default/2018/12/05/00121544028163479762264/Foto/juguetes.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="light">Ir...</b-button>
        </b-card>
      </div>
      <div>
        <b-card
          title="Llantas"
          bg-variant="dark" 
          text-variant="white"
          img-src="https://noticias.coches.com/wp-content/uploads/2018/11/hre-wheels-llanta-titanio-impresa-3d-5.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="light">Ir...</b-button>
        </b-card>
      </div>
    </b-card-group>
    <br>
    <br>
    <b-button type="primary" variant="light">Ver mas...</b-button>
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
body,
html {
  height: 100%;
}
.bg {
  /* The image used */
  background-image: url("https://i.pinimg.com/originals/9b/c9/8f/9bc98f55db5737c6b9601ea215f14467.jpg");

  /* Half height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

