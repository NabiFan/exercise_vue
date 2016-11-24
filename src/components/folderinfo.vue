<template>
  <div id="myList">
      folderinfo
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import inputModify from './inputModify'

export default {
  name: 'count',
  data () {
    return {
      inputData: ''
    }
  },
  components: {
    'inputModify': inputModify
  },
  computed: {
    ...mapGetters({
      folderinfo: 'getToDoList'
    })
  },
  methods: {
    ...mapActions([
      'addToDoList',
      'deleteToDoList',
      'updateToDoList'
    ]),
    addList: function () {
      if (this.inputData) {
        this.addToDoList({
          inputInfo: this.inputData
        })
        this.inputData = ''
      }
    },
    deleteList: function (index) {
      this.deleteToDoList({index: index})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src=".././css/folderinfo.scss" />
