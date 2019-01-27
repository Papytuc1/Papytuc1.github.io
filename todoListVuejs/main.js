Vue.component('todo-item', {
  data: function() {
    return {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Faire la vaisselle',
      },
      {
        id: 2,
        title: 'Sortir les poubelles',
      },
      {
        id: 3,
        title: 'Tondre la pelouse'
      }
    ],
    nextTodoId: 4
  }
},
  methods: {
    removeElement : function(index){
      this.todos.splice(index, 1);
    },
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  },
  template:'  <div><form v-on:submit.prevent="addNewTodo">  <label for="new-todo">Ajouter une tâche</label>  <input    v-model="newTodoText"    id="new-todo"    placeholder="Ex. nourrir le chat"  >  <button>Add</button></form><ul>  <li    v-for="(todo, index) in todos"    v-bind:key="todo.id"    v-bind:title="todo.title"  >  {{ todo.title }}  <button v-on:click="removeElement(index,1)">Supprimer</button></li></ul></div>'
}) 
var app = new Vue({
  el: '#todo-list-example' 
})