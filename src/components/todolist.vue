<template>
  <div id="myList">
  	<span class="title_a">please enter: </span>
  	<input v-model="inputData" v-focus @keyup.enter="addList">
  	<div>
  		<hr />
  		<span class="title_a">todolist infomation : </span>
  		<ul class="rolldown-list" >
	  		<li v-for="(item, index) in todolist">
          <inputModify :item="item"  :updateData="updateList" :index="index" ></inputModify>
	  			<button class="btnDelete" @click="deleteList(index)">X</button>
	  		</li>
	  	</ul>
  	</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import inputModify from './inputModify'
import autoFocus from '../directives/autoFocus'

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
  directives: {
    focus: autoFocus
  },
  computed: {
    ...mapGetters({
      todolist: 'getToDoList'
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
    },
    updateList: function(obj){
      this.updateToDoList(obj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src=".././css/todolist.scss" />
