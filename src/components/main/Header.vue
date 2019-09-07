<template>
    <div class="header">
        <div class="brand-text d-none d-lg-inline-block brand"  v-show="headerStataus">
          <strong>U成长</strong>
          <span>公寓管理平台</span>
        </div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <!-- <img class="user-logo" src="../../../static/img/img.jpg"> -->
                    <el-button icon="el-icon-s-custom" circle></el-button>
                    <!-- {{username}} -->
                </span>
                <el-dropdown-menu slot="dropdown" width="180px">
                    <el-dropdown-item>
                      <el-button class="dropdown-btn">{{username}}</el-button>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-button  class="dropdown-btn" @click="editFormVisible = true">修改密码</el-button>
                      
                    </el-dropdown-item>
                    <el-dropdown-item command="loginout">
                      <el-button  class="dropdown-btn">退出</el-button>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <!-- 修改管理员密码 start -->
            <el-dialog title="修改密码" :visible.sync="editFormVisible" width="30%">
              <el-form :model="formEdit" ref="formEdit">
                <!-- <el-form-item label="旧密码" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.password" autocomplete="off"></el-input>
                </el-form-item> -->
                <el-form-item label="新密码" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.password" autocomplete="off" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.rePassword" autocomplete="off" type="password"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="editFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="resetManager('formEdit')">确 定</el-button>
              </div>
            </el-dialog>
            <!-- 修改管理员密码 end -->
        </div>
    </div>
</template>
<script>
import {updateManager} from '@/apis'
export default {
  data () {
    return {
      formLabelWidth: '100px',
      name: '',
      editFormVisible: false,
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        rePassword: [{ required: true, message: '请确认密码', trigger: 'blur' }]
      },
      formEdit: {
        name: sessionStorage.getItem('login_username'),
        age: sessionStorage.getItem('age'),
        password: '',
        rePassword: ''
      }
    }
  },
  computed: {
    username () {
      let username = sessionStorage.getItem('login_username')
      return username || this.name
    },
    headerStataus () {
      return this.$store.getters.getHeaderStatus
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        sessionStorage.removeItem('login_username')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('age')
        this.$router.push('/login')
      }
    },
    resetManager (formName) {
      this.$refs['formEdit'].validate(valid => {
        if (valid) {
          var params = {
            name: this.formEdit.name,
            password: this.formEdit.password,
            age: this.formEdit.age
          }
          updateManager(params).then(res => {
            if (res.errorcode === 200) {
              alert('修改成功,请重新登录')
              console.log('修改成功,请重新登录')
              this.editFormVisible = false
              this.$router.push('/login')
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
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
  .brand{
    margin-left: 30px
  }
}
.header .logo {
  float: left;
  width: 250px;
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
.dropdown-btn {
  width: 160px
}
</style>
