import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MugsComponent } from './mugs.component';

describe('MugsComponent', () => {
  let component: MugsComponent;
  let fixture: ComponentFixture<MugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
