<template>
  <div id="ToDoListMain">
      <input
          id="addTxt"
          type="text"
      >
      <input
          id="addBtn"
          type="submit"
          value="Add"
          @click="addBtnClick"
          v-model="todo"
      >
      <section
          id="todolist"
      >
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
      todoList : []
    }
  },
  methods: {
    async  addBtnClick() {
      const res = await api.addTodo(this.todo)
      this.todoList.push(res)
    }
  },
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

#addTxt,#addBtn {
  width: 80%;
}

</style>