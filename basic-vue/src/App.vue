<template>
  <h1>{{title}}</h1>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{task.id}} . {{task.name}}

      <div v-if="task.finished">
        <button>Delete Task</button>
      </div>
      <div v-else-if="task.edit">
        <button>Edit Task</button>
      </div>
      <div v-else>
        <p>No Button</p>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      title : 'My To-Do App',
      tasks : [
        {id : 1 , name : "Coding" , finished : true},
        {id : 2, name : "Do a VUE JS" , finished: false},
        {id : 3, name : "Do a To Do List App" , finished : false}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
