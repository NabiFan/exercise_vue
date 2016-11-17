<template>
	<div class="toolbar">
	  <ul>
	  	<li><router-link class="title" :to="'login'">login</router-link></li>
	  	<li><router-link class="title" :to="{name: 'todolist' }">todo list</router-link></li>
		<li><router-link class="title" :to="{name: 'folderinfo' }">folder info</router-link></li>
	  </ul>
  </div>
</template>
<script>
export default {

}
</script>

<style>

</style>