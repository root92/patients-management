import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementPlanComponent } from './traitement-plan.component';

describe('TraitementPlanComponent', () => {
  let component: TraitementPlanComponent;
  let fixture: ComponentFixture<TraitementPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitementPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
