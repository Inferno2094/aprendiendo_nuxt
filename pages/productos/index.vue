<template>
    <!--<div class="overflow-auto"> -->
        <div class="row mt-3">
            <div class="col-sm-6">
                <h2>listado de productos</h2>
            </div>
            <div class="col-sm-6">
                <b-button class="primary" href="/productos/crear">Nuevo</b-button>
            </div>
            <div class="row mt-2">
                <div class="col-sm-12">
                    <b-table id="productos" responsive striped hover :fields="fields" :items="productos" :per-page="perPage" :current-page="currentPage" small/>
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="productos"
                    ></b-pagination>
                </div>
            </div>
        </div>
        <!--<b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" class="mt-4">
            <span class="text-success" slot="first-text">Inicio</span>
            <span class="text-danger" slot="prev-text">Ant.</span>
            <span class="text-warning" slot="next-text">Sig.</span>
            <span class="text-info" slot="last-text">Ultima</span>
            <div slot="ellipsis-text">
                <b-spinner small type="grow"></b-spinner>
                <b-spinner small type="grow"></b-spinner>
                <b-spinner small type="grow"></b-spinner>
            </div>
            <span slot="page" slot-scope="{ page, active }">
                <b v-if="active">{{ page }}</b>
                <i v-else>{{ page }}</i>
            </span>
        </b-pagination> -->
    <!--</div>-->
</template>

<script>
import {db} from '../../services/firebase'
export default {
    asyncData(){
        return db.collection("productos").get().then((productosSnap) => {
            let productos = []
            productosSnap.forEach((value) => {
                productos.push(value.data())
            })
            return{
                productos
            }
        })
    },
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            fields: ['imagen', 'nombre', 'precio', 'cantidad', 'acciones']
        }
    },
    computed: {
        rows(){
            return this.productos.length
        }
    }
}
</script>
