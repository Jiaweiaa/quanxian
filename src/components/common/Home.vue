<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <v-breadcrumb class="breadCrumb"></v-breadcrumb>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vBreadcrumb from './Breadcrumb.vue';

    export default {
        components:{
            vHead, vSidebar, vBreadcrumb
        }
    }
</script>
