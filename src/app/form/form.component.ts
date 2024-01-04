import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Todo} from "../todo.interface";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  newTask: string = '';
  isCompleted: boolean = false;
  @Output() addTodo = new EventEmitter<Todo>();

  onAddTodoClick() {
    const newTodo: Todo = {text: this.newTask, completed: this.isCompleted};
    console.log(newTodo)
    this.addTodo.emit(newTodo);
    this.clearInput();
  }

  clearInput() {
    this.newTask = '';
    this.isCompleted = false;
  }
}
