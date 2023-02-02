import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoBoardComponent } from './xo-board.component';

describe('XoBoardComponent', () => {
  let component: XoBoardComponent;
  let fixture: ComponentFixture<XoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XoBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
