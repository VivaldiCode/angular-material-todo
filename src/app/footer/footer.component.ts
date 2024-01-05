import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Todo} from "../todo.interface";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  @Input() todos: Todo[] | undefined; // Define a Todo interface
  @Output() clearCompleted = new EventEmitter<unknown>();

  getIncompleteCount(): number {
    // Implement logic to count incomplete todos
    // @ts-ignore
    return this.todos.filter(todo => !todo.completed).length;
  }

  clearCompletedClick() {
    this.clearCompleted.emit()
  }
}
