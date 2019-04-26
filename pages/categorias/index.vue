<template>
  <div class="row mt-3">
    <div class="col-sm-6">
      <h2>listado de Categorias</h2>
    </div>
    <div class="col-sm-6">
      <b-button class="primary" href="/categorias/crear">Nueva</b-button>
    </div>
    <div class="row mt-2">
      <div class="col-sm-12">
        <b-table
          id="categorias"
          responsive
          striped
          hover
          :fields="fields"
          :items="categorias"
          :per-page="perPage"
          :current-page="currentPage"
          small
        >
          <template slot="acciones" slot-scope="data">
            <b-button variant="success">Editar</b-button>
            <b-button variant="danger" @click="eliminarCategoria(data.item.id)">Eliminar</b-button>
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="categorias"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../services/firebase";
export default {
  asyncData() {
    return db
      .collection("categorias")
      .get()
      .then(categoriasSnap => {
        let categorias = [];
        categoriasSnap.forEach(value => {
          categorias.push({
            id: value.id,
            ...value.data()
          });
        });
        return {
          categorias,
          perPage: 10,
          currentPage: 1
        };
      });
  },
  data() {
    return {
      fields: ["categoria", "acciones"]
    };
  },
  computed: {
    rows() {
      return this.categorias.length;
    }
  },
  methods: {
    eliminarCategoria(id) {
      db.collection("categorias")
        .doc(id)
        .delete()
        .then(() => {
          let index;
          this.categorias.map((value, key) => {
            if (value.id == id) index = key;
          });
          this.categorias.splice(index, 1);
        });
    }
  }
};
</script>
