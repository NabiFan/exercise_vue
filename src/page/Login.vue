<template>
  <div class="login">
    <p><img src="../assets/tit-logo.png" /></p>
  	<p><input type="text" id="username" placeholder="使用者帳號" v-model="userName" autocomplete="off"></p>
  	<p><input type="password" id="password" placeholder="密碼" v-model="userPassword" @keyup.enter="loginFun"></p>
  	<p><button class="btn btn-primary btn-lg active" @click="loginFun">登入</button></p>
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
      this.login({
        username: this.userName,
        password: this.userPassword
      })
      .then(() => {
        console.log('run');
        
        this.$router.push('/home')
      })
      .catch(() => {
        alert('error')
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
