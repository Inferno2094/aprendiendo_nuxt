<template>
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
                        <label for="categoria">Nombre del Producto:</label>
                        <input type="text" class="form-control" v-model="form.categoria" placeholder="Ingresa una Nueva Categoria" name="categoria" id="categoria">
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
</template>

<script>

import {db} from '../../services/firebase'

export default {            
    data(){
        return{
            form: {
                categoria: ''
            },

            guardado: true,
            guardando: false,
        }
    },
    methods: {
        guerdarCategoria(){
            this.guardado = false
            this.guardando = true
            db.collection("categorias").add(this.form).then(res => {
                this.$router.push({
                    path: "/categorias"
                })
            })
        }
    }
}
</script>

