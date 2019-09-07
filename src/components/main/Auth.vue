<template>
  <div>
    <div>
      <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true" v-if="token==='1'">
        <span>新增</span>
      </el-button>
      <!-- 新增管理员 dialog start-->
      <el-dialog title="新增管理员" :visible.sync="dialogFormVisible">
        <el-form :model="form" :inline="true">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 新增管理员 dialog end -->
      <el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true">
        <span>修改</span>
      </el-button>
      <el-button
        type="danger"
        icon="el-icon-minus"
        @click="dialogFormVisible = true"
        v-if="token==='1'"
        disabled="isSelected">
        <span>删除</span>
      </el-button>
    </div>
    <div class="managertable">
      <el-table ref="managerData" :data="managerData" border>
        <el-table-column
          type="selection"
          width="55"
          align="center"
          :selectable="selectable">
        </el-table-column>
        <el-table-column prop="id" type="index" label="序号" width="180"  align="center"></el-table-column>
        <el-table-column prop="name" label="管理员" align="center"></el-table-column>
        <!-- <el-table-column prop="date" label="注册日期"></el-table-column> -->
        <el-table-column prop="age" label="年龄" align="center"></el-table-column>
      <!-- <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index,scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>-->
      </el-table>
    </div>
  </div>
</template>
<script>
import {authMgmt} from '@/apis'
export default {
  data () {
    return {
      managerData: [],
      isSelected: true,
      dialogFormVisible: false,
      token: sessionStorage.getItem('token'),
      form: {
        name: '',
        age: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  mounted () {
    authMgmt().then(res => {
      let data = res.data
      console.log(data)
      this.managerData = data
    })
  },
  methods: {
    selectable () {  // 确定checkbox是否可选择状态
      // this.isSelected = true
      // console.log(this.token)
      if (this.token === 1) {
        return false
      } else if (this.token === 0) {
        return true
      }
    }
  }
}
</script>
<style lang="less" scoped>
.managertable{
  margin-top: 20px
}
</style>