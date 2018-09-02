import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MugComponent } from './mug.component';

describe('MugComponent', () => {
  let component: MugComponent;
  let fixture: ComponentFixture<MugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
