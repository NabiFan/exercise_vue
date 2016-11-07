<template>
  <div class="home">
    <toolbar></toolbar>
    <hello></hello>
  </div>
</template>

<script>
import toolbar from '../components/toolbar'
import hello from '../components/Hello'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    toolbar,
    hello
  }
}
</script>

<style>

</style>
