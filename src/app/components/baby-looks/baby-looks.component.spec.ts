import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyLooksComponent } from './baby-looks.component';

describe('BabyLooksComponent', () => {
  let component: BabyLooksComponent;
  let fixture: ComponentFixture<BabyLooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyLooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyLooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
