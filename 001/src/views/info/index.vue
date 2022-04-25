<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧区域 -->
    <el-col :span="24" style="margin-top: 20px">
        <el-card style="margin-top: 20px; height: 460px;">
        <el-table :data="tableData"  max-height="500">
          <el-table-column v-for="(val, index) in tableLable" 
          :key="index" :prop="index" :label="val"></el-table-column>
        </el-table>
        </el-card>
 

    </el-col>
  </el-row>
</template>
<script>

export default{
    name:'info',
    
    data(){
      return{
        tableData:[
        {
            name:"oppo",
            todayBuy:300,
            monthBuy:800,
            totalBuy:800
        },
                {
            name:"oppo",
            todayBuy:300,
            monthBuy:800,
            totalBuy:800
        },
                {
            name:"oppo",
            todayBuy:300,
            monthBuy:800,
            totalBuy:800
        }
        ],
           tableLable: {
        name: 'Admin',
        todayBuy: '浇灌时间',
        monthBuy: '浇灌时常',
        totalBuy: '浇灌大小'
      },
      }
    
}
}
</script>