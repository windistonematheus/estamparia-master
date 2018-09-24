import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyLookViewComponent } from './baby-look-view.component';

describe('BabyLookViewComponent', () => {
  let component: BabyLookViewComponent;
  let fixture: ComponentFixture<BabyLookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyLookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyLookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
