<template>
  <div class="login-wrap">
    <!-- <div class="ms-login"> -->
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <div class="ms-title">U成长公寓管理平台</div>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
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
.login-wrap {
    width: 100%;
    /* height: 50%; */
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 120px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    /* background-color: black; */
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.ms-title {
    margin: 0px auto 30px auto;
    text-align: center;
    font-size: 20px;
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
}
.login-btn button {
    width: 100%;
    height: 36px;
}
</style>