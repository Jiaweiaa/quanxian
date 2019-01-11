<template>
    <div class="branBox">
        <el-breadcrumb separator="/" >
            <el-breadcrumb-item v-for="(item, index) in breadlist" :key='index' :to="index !== 0 ?  item.path : ''">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                breadlist: [],
                projectName: ''
            }
        },
        created() {
            this.getBread();
        },
        methods: {
            getBread() {
                this.breadlist = [];
                for(let i = 0; i < this.$route.matched.length; i++) {
                    this.breadlist.push({
                        name: this.$route.matched[i].name,
                        path: this.$route.matched[i].path
                    })
                }
            }
        },
        watch: {
            $route() {
                this.getBread();
            }
        }
    }
</script>
<style scoped>
</style>
