<template>
  <div class="login">
    <img src="../assets/tit-logo.png" />
  	<p><input type="text" id="username" placeholder="使用者帳號" v-model="userName" autocomplete="off"></p>
  	<p><input type="password" id="password" placeholder="密碼" v-model="userPassword" @keyup.enter="loginFun"></p>
  	<p><button @click="loginFun">登入</button></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      userName: 'neweggboxccc',
      userPassword: 'admin'
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    loginFun: function () {
      console.log('user : ', this.userName)
      this.login({
        username: this.userName,
        password: this.userPassword
      })
      .then(() => {
        console.log('success!!')
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style>
  .login button{
    width: 174px;
  }
</style>
