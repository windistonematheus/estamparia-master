import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtViewComponent } from './t-shirt-view.component';

describe('TShirtViewComponent', () => {
  let component: TShirtViewComponent;
  let fixture: ComponentFixture<TShirtViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
