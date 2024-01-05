import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Todo} from "../todo.interface";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class ListComponent {
  @Input() todos: Todo[] | undefined; // Define a Todo interface
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() updateTodosInCache = new EventEmitter<Todo[]>();

  onDeleteTodoClick(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

  onToggleTodoStatus(todo: Todo) {
    this.updateTodosInCache.emit(this.todos);
  }

}
