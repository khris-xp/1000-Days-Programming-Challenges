<template>
  <h1>{{title}}</h1>

  <img :src="logoURL" :alt="logoCaption" width="200" height="200" />

  <h3>You have {{allTask}} {{allTask > 1 ? "tasks" : "task"}} at the momment</h3>

  <div>
    <input type="text" v-model="newTask" placeholder="New Task"/>
  </div>

  <div v-if="newTask.length > 0">
    <h3>New Task Preview</h3>
    <p>{{newTask}}</p>
  </div>

  <button @click="addTask" :disabled="newTask.length < 1">Add Task</button>

  <ul>
    <li v-for="(task , index) in lastest" :key="task.id" @click="finishTask(task)" :class="{strikeout: task.finished}">
      {{index + 1}} . {{task.name}}

      <div v-if="task.finished">
        <button @click="deleteTask(task.id)">Delete Task</button>
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
      logoURL: 'https://gifdb.com/images/high/animated-programmer-guy-coding-790a0bs8e8thpisg.gif',
      logoCation : 'Learn VUE Project'
    }
  },
  methods: {
    addTask() {
      if(this.newTask.length < 1) {
        return;
      }

      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.newTask,
        finished : false
      });
    },
    finishTask(task) {
      task.finished = !task.finished;
    },
    deleteTask(taskID) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskID
      })
    }
  },
  computed: {
    allTask() {
      return this.tasks.length;
    },
    lastest() {
      return [...this.tasks].reverse();
    }
  }
}
</script>

<style>

.strikeout {
  text-decoration: line-through;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
