import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCv } from './view-cv';

describe('ViewCv', () => {
  let component: ViewCv;
  let fixture: ComponentFixture<ViewCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
