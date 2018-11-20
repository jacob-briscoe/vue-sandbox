<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form @submit.prevent="addToDo" class="form-inline">
          <div class="form-group">
            <input type="text" placeholder="To Do Item" class="form-control" name="ToDo" id="todoEntry" v-model="todoEntry" v-validate="'required|min:3'" data-vv-validate-on="submit" />
            <span class="badge badge-danger" v-show="errors.has('ToDo')">{{ errors.first('ToDo') }}</span>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul class="list-group list-group-flush">
          <li v-for="todo in todos" :key="todo.id"
            class="list-group-item">
            {{ todo.text }}
          </li>
        </ul>
      </div>
    </div>
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
