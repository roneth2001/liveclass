import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectuerDashComponent } from './lectuer-dash.component';

describe('LectuerDashComponent', () => {
  let component: LectuerDashComponent;
  let fixture: ComponentFixture<LectuerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectuerDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectuerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
