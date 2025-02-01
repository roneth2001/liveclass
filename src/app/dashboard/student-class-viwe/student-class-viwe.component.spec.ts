import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassViweComponent } from './student-class-viwe.component';

describe('StudentClassViweComponent', () => {
  let component: StudentClassViweComponent;
  let fixture: ComponentFixture<StudentClassViweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentClassViweComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentClassViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
