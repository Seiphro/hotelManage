<template>
  <el-table ref="managerData" :data="managerData" style="width: 100%">
    <el-table-column prop="id" type="index" label="序号" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
    <el-table-column prop="date" label="注册日期"></el-table-column>
    <el-table-column prop="isAdmin" label="是否超级管理员"></el-table-column>
    <el-table-column fixed="right" label="操作" width="150">
      <template slot-scope="scope">
        <el-button  size="mini" type="primary" @click="handleEdit(scope.$index,scope.row)">修改</el-button>
        <el-button  size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { authMgmt } from '@/apis'
export default {
  data () {
    return {
      // tableData: [
      //   {
      //     date: '2016-05-02',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   },
      managerData: [] 
    }
  },
  mounted () {
    authMgmt().then(res => {
      let data = res.data
      console.log(data)
      this.managerData = data
    })
  }
}
</script>