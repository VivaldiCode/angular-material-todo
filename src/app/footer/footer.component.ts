import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../todo.interface";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
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
