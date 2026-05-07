import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CV } from '../../../../core/domain/models/cv.model';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-table-cv',
  imports: [Button],
  templateUrl: './table-cv.html',
  styleUrl: './table-cv.scss',
})
export class TableCv {
  @Input() data: CV[] = [];
  @Output() onView: EventEmitter<string> = new EventEmitter<string>();

  viewCV(email: string){
    this.onView.emit(email);
  }

}
