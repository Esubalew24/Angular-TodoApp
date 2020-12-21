import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TskFormComponent } from './tsk-form.component';

describe('TskFormComponent', () => {
  let component: TskFormComponent;
  let fixture: ComponentFixture<TskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TskFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
