import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorsComponent } from './minors.component';

describe('MinorsComponent', () => {
  let component: MinorsComponent;
  let fixture: ComponentFixture<MinorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
