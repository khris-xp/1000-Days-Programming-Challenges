<template>
  <h1>{{title}}</h1>

   <div>
        <input type="text" v-model="newTask" placeholder="New Task"/>
      </div>

      <div v-if="newTask.length > 0">
        <h3>New Task Preview</h3>
        <p>{{newTask}}</p>
      </div>
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
      ],
      newTask: '',
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
