import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FormComponent} from "./form/form.component";
import {ListComponent} from "./list/list.component";
import {FooterComponent} from "./footer/footer.component";
import {FilterComponent} from "./filter/filter.component";
import {Todo} from "./todo.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FormComponent, ListComponent, FooterComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  darkMode: boolean = false;
  currentFilter: string = 'all';

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.saveTodosToCache();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.saveTodosToCache();

  }

  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed);
    this.saveTodosToCache();
  }

  private loadTodosFromCache() {
    caches.open('todo-cache').then(cache => {
      cache.match('todos').then(response => {
        if (response) {
          response.json().then(data => {
            this.todos = data;
          });
        }
      });
    });
  }

  private saveTodosToCache() {
    caches.open('todo-cache').then(cache => {
      cache.put('todos', new Response(JSON.stringify(this.todos)));
    });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString())
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
  }


  get filteredTodos(): Todo[] {
    switch (this.currentFilter) {
      case 'active':
        return this.todos.filter(todo => !todo.completed);
      case 'completed':
        return this.todos.filter(todo => todo.completed);
      default:
        return this.todos;
    }
  }

  updateTodosInCache(updatedTodos: Todo[]) {
    this.todos = updatedTodos;
    this.saveTodosToCache();
  }

  ngOnInit() {
    this.loadTodosFromCache();
    const darkModeStorage = localStorage.getItem('darkMode')
    this.darkMode = darkModeStorage === 'true'
  }
}
