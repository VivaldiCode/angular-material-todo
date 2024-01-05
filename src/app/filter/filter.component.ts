import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string>();
  @Input() currentFilter = ''

  setFilter(filter: string) {
    this.filterChange.emit(filter);
  }
}
