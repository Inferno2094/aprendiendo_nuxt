<template>
    <div>
        <h1>holi {{ msg }}</h1>
        <input type="text" v-model="msg">
        <button @click="guerdar">Guardar</button>
        <table>
            <tr>
                <th>Nombre</th>
            </tr>
            <tr v-for="(item, index) in municipios" :key="index">
                <td>{{item}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: "Holi",
            municipios: ['Mocoa', 'Villa', 'Puerto']
        };
    },
    methods: {
        guerdar(){
            this.municipios.push(this.msg)
            this.msg = ''
        }
    }
}
</script>

<style>

</style>

