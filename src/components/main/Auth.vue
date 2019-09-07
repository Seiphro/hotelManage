<template>
  <div>
    <div>
      <el-button type="primary" icon="el-icon-plus" @click="insertFormVisible = true" v-if="token==='0'">
        <span>新增</span>
      </el-button>
      <!-- 新增管理员 dialog start-->
      <el-dialog title="新增管理员" :visible.sync="insertFormVisible"  width="30%">
        <el-form :model="formRegister" ref="formRegister">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="formRegister.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="formRegister.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="formRegister.password" autocomplete="off" type="password"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="insertFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit('formRegister')">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 新增管理员 dialog end -->
    </div>
    <div class="managertable">
      <el-table ref="managerData" :data="managerData" border>
        <el-table-column prop="id" type="index" label="序号" width="180"  align="center"></el-table-column>
        <el-table-column prop="name" label="管理员" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center"></el-table-column>
        <el-table-column prop="option" label="操作" align="center" v-if="token==='0'">
          <template slot-scope="scope">
            <el-button-group>
              <el-button type="primary" icon="el-icon-edit" @click="modifyManager(scope.row)"></el-button>
              <!-- 修改管理员信息框 start -->
              <el-dialog title="修改管理员信息" :visible.sync="editFormVisible" width="30%">
                <el-form :model="formEdit" :rules="rules" ref="formEdit">
                  <el-form-item label="用户名:" :label-width="formLabelWidth">
                    <span>{{formEdit.name}}</span>
                    <!-- <el-input v-model="formEdit.name" autocomplete="off"></el-input> -->
                  </el-form-item>
                  <el-form-item label="年龄:" :label-width="formLabelWidth">
                    <el-input v-model="formEdit.age" autocomplete="off" style="width=50px"></el-input>
                  </el-form-item>
                  <el-form-item label="密码:" :label-width="formLabelWidth">
                    <el-input v-model="formEdit.password" autocomplete="off" type="password"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="editFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="updateManager('formEdit')">确 定</el-button>
                </div>
              </el-dialog>
              <!-- 修改管理员信息框 end -->
              <el-button type="danger" icon="el-icon-delete" @click="deleteM(scope.row)"></el-button>
              <el-dialog title="删除管理员" :visible.sync="deleteFormVisible"  width="30%">
                <span>确认删除{{scope.row.name}}?</span>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="deleteFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="deleteManagerByName(scope.row)">确 定</el-button>
                </div>
              </el-dialog>
            </el-button-group>
　　　　   </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {authMgmt, register, updateManager, deleteManager} from '@/apis'

export default {
  data () {
    return {
      managerData: [],
      insertFormVisible: false,
      editFormVisible: false,
      deleteFormVisible: false,
      token: sessionStorage.getItem('token'),
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        age: [{ required: true, message: '请输入年龄', trigger: 'blur' }]
      },
      form: {    // 显示管理员列表
        name: '',
        age: '',
        password: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formRegister: {
        name: '',
        password: '',
        age: ''
      },
      formEdit: {
        name: '',
        age: '',
        password: ''
      },
      formLabelWidth: '80px'
    }
  },
  mounted () {
    authMgmt().then(res => {
      this.managerData = res.data
    })
  },
  methods: {
    // 新增管理员
    submit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var params = {
            name: this.formRegister.name,
            password: this.formRegister.password,
            age: this.formRegister.age
          }
          console.log(params)
          register(params).then(res => {
            if (res.errorcode === 200) {
              alert('添加成功')
              this.insertFormVisible = false
            } else {
              console.log(res.errorcode)
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    modifyManager (params) {
      console.log(params)
      this.editFormVisible = true
      this.formEdit = Object.assign({}, params)
    },
    updateManager (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var params = {
            name: this.formEdit.name,
            password: this.formEdit.password,
            age: this.formEdit.age
          }
          updateManager(params).then(res => {
            if (res.errorcode === 200) {
              alert('修改成功')
              this.editFormVisible = false
            } else {
              console.log(res.errorcode)
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    deleteM () { // 点击删除图标按钮事件
      this.deleteFormVisible = true
    },
    deleteManagerByName (params) { // 通过传递姓名来删除管理员
      this.formEdit = Object.assign({}, params)
      deleteManager(params.name).then(res => {
        if (res.errorcode === 200) {
          alert('删除成功')
          this.deleteFormVisible = false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.managertable{
  margin-top: 20px;
  .noBorder{
    border: false
  }
}
</style>