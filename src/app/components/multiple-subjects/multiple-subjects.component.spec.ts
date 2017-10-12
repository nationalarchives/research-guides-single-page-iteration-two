import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSubjectsComponent } from './multiple-subjects.component';

describe('MultipleSubjectsComponent', () => {
  let component: MultipleSubjectsComponent;
  let fixture: ComponentFixture<MultipleSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
