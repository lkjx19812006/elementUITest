<style>
    div {
        margin: 5px auto;
    }
</style>
<template>
    <div>
        <!--布局组件-->
        <Layout></Layout>
        <!--按钮组件-->
        <my-button></my-button>
        <!--表格组件-->
        <my-table></my-table>
        <!--表单组件-->
        <Form-validate></Form-validate>
    </div>

</template>
<script>
    import Layout from './components/Layout.vue';
    import myButton from './components/Button.vue';
    import myTable from './components/Table.vue';
    import FormValidate from './components/FormValidate.vue';
    export default {
        name: 'App',
        data() {
            return {

            }
        },
        components: {
            Layout,myButton,myTable,FormValidate
        }
    }

</script>