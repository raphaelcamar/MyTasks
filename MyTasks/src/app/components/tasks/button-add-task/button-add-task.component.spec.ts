import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddTaskComponent } from './button-add-task.component';

describe('ButtonAddTaskComponent', () => {
  let component: ButtonAddTaskComponent;
  let fixture: ComponentFixture<ButtonAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
