<template>
  <div id="inputModify">
    <span v-if="!showmode"> 
      <input type="checkbox" v-model="checked">
      <span :class="{'checkedl': checked}" @click="changeMode">{{ item.value }}</span>
    </span>
    <input 
      v-focus
      v-if="showmode"
      v-model="inputInfo"
      ref="'hello'"
      @blur="updateDataFun()" 
      @keyup.enter="updateDataFun()" />
  </div>
</template>

<script>
import autoFocus from '../directives/autoFocus'

export default {
  name: 'count',
  directives: {
    focus: autoFocus
  },
  data: function () {
    return {
      showmode: false,
      inputInfo: this.item.value,
      checked: this.item.checked
    }
  },
  props: [
    'item',
    'index',
    'actiontype',
    'updateData'
  ],
  watch:{
    checked: function () {
      this.updateData()
    }
  },
  methods: {
    changeMode: function () {
      this.showmode = true
    },
    updateDataFun: function () {
      this.showmode = false
      this.updateData({
        index: this.index,
        inputInfo: this.inputInfo,
        checked: this.checked
      })
      
      // this.$store.dispatch(this.actiontype, {
      //   index: this.index,
      //   inputInfo: this.inputInfo,
      //   checked: this.checked
      // })
    }
  }
}
</script>

<style scoped>
  #inputModify {
    width: 100px;
    display: inline;
  }
  .checkedl {
    text-decoration: line-through;
  }
  #inputModify input {
    color: black;
  }
</style>
