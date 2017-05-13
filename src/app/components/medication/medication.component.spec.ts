import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadicationComponent } from './madication.component';

describe('MadicationComponent', () => {
  let component: MadicationComponent;
  let fixture: ComponentFixture<MadicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
