import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureClassViweComponent } from './lecture-class-viwe.component';

describe('LectureClassViweComponent', () => {
  let component: LectureClassViweComponent;
  let fixture: ComponentFixture<LectureClassViweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectureClassViweComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureClassViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
