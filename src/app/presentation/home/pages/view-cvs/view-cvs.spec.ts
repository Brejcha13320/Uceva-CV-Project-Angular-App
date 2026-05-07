import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCvs } from './view-cvs';

describe('ViewCvs', () => {
  let component: ViewCvs;
  let fixture: ComponentFixture<ViewCvs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCvs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCvs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
