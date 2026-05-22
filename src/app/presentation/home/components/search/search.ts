import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  @Input() placeholder: string = 'Buscar...';
  @Output() onSearch = new EventEmitter<string>();
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.onSearch.emit(value ?? '');
      });
  }

}
