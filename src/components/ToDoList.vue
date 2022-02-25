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
      >
      <section
          id="todolist"
      >
      </section>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  methods: {
    addBtnClick() {
      
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