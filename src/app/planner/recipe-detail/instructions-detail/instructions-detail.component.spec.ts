import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsDetailComponent } from './instructions-detail.component';

describe('InstructionsDetailComponent', () => {
  let component: InstructionsDetailComponent;
  let fixture: ComponentFixture<InstructionsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
