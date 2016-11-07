<template>
  <div class="home">
    <breadcrumb></breadcrumb>
    <homelist></homelist>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
//breadcrumb, homelist
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      userPassword: ''
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
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style>

</style>