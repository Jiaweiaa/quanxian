<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="tenant">
                <i class="el-icon-setting"></i>租户
            </el-menu-item>
            <el-menu-item index="user">
                <i class="el-icon-setting"></i>用户
            </el-menu-item>
            <el-menu-item index="role">
                <i class="el-icon-setting"></i>角色
            </el-menu-item>
            <el-menu-item index="jurisdiction">
                <i class="el-icon-setting"></i>权限
            </el-menu-item>
            <el-menu-item index="journal">
                <i class="el-icon-setting"></i>日志
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
