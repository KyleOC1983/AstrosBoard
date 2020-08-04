import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherestComponent } from './therest.component';

describe('TherestComponent', () => {
  let component: TherestComponent;
  let fixture: ComponentFixture<TherestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
