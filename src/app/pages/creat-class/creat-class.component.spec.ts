import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatClassComponent } from './creat-class.component';

describe('CreatClassComponent', () => {
  let component: CreatClassComponent;
  let fixture: ComponentFixture<CreatClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
