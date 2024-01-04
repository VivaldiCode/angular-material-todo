import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string>();

  setFilter(filter: string) {
    this.filterChange.emit(filter);
  }
}
