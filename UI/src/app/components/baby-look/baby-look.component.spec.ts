import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyLookComponent } from './baby-look.component';

describe('BabyLookComponent', () => {
  let component: BabyLookComponent;
  let fixture: ComponentFixture<BabyLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
