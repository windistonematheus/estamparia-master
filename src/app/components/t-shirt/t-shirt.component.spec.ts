import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtComponent } from './t-shirt.component';

describe('TShirtComponent', () => {
  let component: TShirtComponent;
  let fixture: ComponentFixture<TShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
