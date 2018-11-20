<template>
  <div>
    <form @submit.prevent="addToDo">
      <input type="text" v-model="todoEntry" v-validate="'required|min:3'" name="todo" data-vv-validate-on="submit" />
      <span v-show="errors.has('todo')">{{ errors.first('todo') }}</span>
    </form>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ToDo } from "@/model/ToDo";

@Component
export default class ToDoList extends Vue {
  private todoEntry: string = "";
  private todos: ToDo[];

  constructor() {
    super();

    this.todos = new Array();
    this.todos.push({ id: 1, text: "Test 1" });
    this.todos.push({ id: 2, text: "Test 2" });
    this.todos.push({ id: 3, text: "Test 3" });
  }

  public addToDo(): void {
    this.$validator.validate().then((result) => {
      if (result) {
        this.todos.push({ id: this.todos.length + 1, text: this.todoEntry });
        this.todoEntry = "";
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
