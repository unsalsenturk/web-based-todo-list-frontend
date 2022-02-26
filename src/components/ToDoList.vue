<template>
  <div id="ToDoListMain">
    <input
        id="addTxt"
        type="text"
        v-model="todo"
    >
    <input
        id="addBtn"
        type="submit"
        value="Add"
        @click="addBtnClick"

    >
    <section
        id="todolist"
    >
      <ul
          v-for="todoitem of todoList"
          :key="todoitem.id"
      >
        {{ todoitem.description }}
      </ul>
    </section>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "ToDoList",
  data() {
    return {
      todo: '',
      todoList: []
    }
  },
  methods: {
    async addBtnClick() {
      if (this.todo === '')
        return

      const {data} = await api.addTodo(this.todo)
      this.todoList.push(data)
    }
  },
  async created() {
    const {data} = await api.getTodoList()
    this.todoList = data
  }
}
</script>

<style scoped>

#ToDoListMain {
  background: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  width: 30%;
  height: 70%;
  padding-top: 20px;
}

#addTxt, #addBtn {
  width: 80%;
}

</style>