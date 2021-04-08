import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduableComponent } from './scheduable.component';

describe('ScheduableComponent', () => {
  let component: ScheduableComponent;
  let fixture: ComponentFixture<ScheduableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
