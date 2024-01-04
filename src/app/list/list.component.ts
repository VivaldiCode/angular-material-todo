import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../todo.interface";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() todos: Todo[] | undefined; // Define a Todo interface
  @Output() deleteTodo = new EventEmitter<Todo>();

  onDeleteTodoClick(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
