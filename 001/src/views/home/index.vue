<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧区域 -->
    <el-col :span="16" style="margin-top: 20px">
      <!-- 用户信息卡片 -->
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/images/user.png" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录的时间：<span>2022-3-23</span></p>
          <p>上次登录的地址：<span>四川</span></p>
        </div>
      </el-card>
 

    </el-col>
  </el-row>
</template>
<script>
import {getMenu} from '../../../api/data'
export default{
    name:'home',
    data(){
      return{

      }
    },
    mounted(){
      // getMenu().then(res =>{
      //   console.log(res)
      // })
    }
}
</script>