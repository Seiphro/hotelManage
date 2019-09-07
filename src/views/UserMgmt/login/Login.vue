  <template>
  <div class="login-wrap">
    <!-- <div class="ms-login"> -->
      <div class="logo">
        <img src="../../../../src\assets\images\unicom.png" width="85%">
      </div>
    <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <div class="ms-title">U成长公寓管理平台</div>
        <el-form-item prop="username">
          <!-- <el-button icon="el-icon-myhotelyonghudenglu1" type="primary" @click="submitForm('formline')"></el-button> -->
          <el-input v-model="ruleForm.username" type="changeType" placeholder="  用户名"  prefix-icon="el-icon-myhotelyonghudenglu1">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="  密码" v-model="ruleForm.password" prefix-icon="el-icon-myhotelmima3" @keyup.enter.native="submitForm('ruleForm')">
           <!-- <el-button icon="el-icon-myhotelmima3" type="primary" @click="submitForm('formline')"></el-button> -->
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import { login } from '@/views/UserMgmt/login/apis'
export default {
  data: function () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var params = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }
          console.log(params)
          login(params)
            .then(res => {
              console.log(res.data)
              if (res.errorcode === '200') {
                sessionStorage.setItem(
                  'login_username',
                  this.ruleForm.username
                )
                sessionStorage.setItem('token', res.data.userType)
                sessionStorage.setItem('age', res.data.age)
                console.log(sessionStorage.getItem('token'))
                this.$router.push('/home')
              } else {
                // response.data.message
                console.log(res.errorcode + ' ' + res.errormsg)
                self.$message.error('登录不成功，请重试')
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
div.logo{
  width: 50%;
  height: 300px;
  position: relative;
  float: left;
}
div.login{
  width: 50%;
  position: relative;
  margin: 0px;
  float: right;
  padding: 20px 0 0 0;
}


.login-wrap {
    /* height: 50%; */
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 120px auto;
    width: 700px;
    padding: 15px 35px 15px 15px;
    background: #fff;
    /* background-color: black; */
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #1b5b80;
    height: 300px;
    }
.ms-title {
    margin: 0px auto 15px auto;
    text-align: center;
    font-family: SimSun;
    font-size: 25px;
    font-weight: 1000;
    text-shadow: #4275d4;
    color: #505458;
   
    /* background-color: pink; */
}
.ms-login {
    position: absolute;
    /* left: 50%;
    top: 50%;
    width: 300px;
    height: 160px;
    margin: -150px 0 0 -190px;
    padding: 40px; */
    border-radius: 5px;
    background: green;
}
.login-btn {
    text-align: center;
    margin: auto;
    width: 324px;
    height: 40px;
}
.login-btn button {
    width: 100%;
    height: 36px;

}
</style>

