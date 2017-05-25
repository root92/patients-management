import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInterviewComponent } from './medical-interview.component';

describe('MedicalInterviewComponent', () => {
  let component: MedicalInterviewComponent;
  let fixture: ComponentFixture<MedicalInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
