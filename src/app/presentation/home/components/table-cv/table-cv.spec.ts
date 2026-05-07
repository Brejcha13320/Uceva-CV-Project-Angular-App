import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCv } from './table-cv';

describe('TableCv', () => {
  let component: TableCv;
  let fixture: ComponentFixture<TableCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
