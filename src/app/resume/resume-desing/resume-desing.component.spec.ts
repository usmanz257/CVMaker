import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDesingComponent } from './resume-desing.component';

describe('ResumeDesingComponent', () => {
  let component: ResumeDesingComponent;
  let fixture: ComponentFixture<ResumeDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeDesingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
