<template>
  <div>
    <h1> HOME PAGE</h1>
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";

export default {
  name: "Home",
  components: {ToDoList}
}
</script>

<style scoped>

</style>