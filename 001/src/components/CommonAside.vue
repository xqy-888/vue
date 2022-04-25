<template>
   <el-menu default-active="1-4-1" 
    class="el-menu-vertical-demo" @open="handleOpen" 
    @close="handleClose" :collapse="isCollapse"
    background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

<!-- <h3>{{isCollapse ? '后台': '通用后台管理系统'}}</h3> -->
    <el-menu-item @click="clickMenu(item)" v-for="item in menu" :index="item.path + ''"  :key="item.path">
    <!-- 图标 -->
    <i :class="'el-icon-' + item.icon"></i> 
    <!-- 文字 -->
    <span slot="title">{{item.label}}</span>
  </el-menu-item>

  
</el-menu>
</template>

<script>
export default {
    data() {
      return {
        // isCollapse: true,
        menu:[{
          path: '/',
          name: 'home',
          label: '首页',
          icon: 'user',
          url: 'Home/Home'
        },
        {
          path: '/info',
          name: 'info',
          label: '手动操作',
          icon: 'video-play',
          url: 'Info/Info'
        },
        {
          path: '/monitor',
          name: 'monitor',
          label: '视频监控',
          icon: 's-home',
          url: 'Monitor/Monitor'
        },   
      ]
      };
    },   
    computed:{
    isCollapse(){
        return this.$store.state.tab.isCollapse
        }
    },
    methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name
      })
    },
    
}
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 400px;
     min-height: 400px; 
  }
</style>
