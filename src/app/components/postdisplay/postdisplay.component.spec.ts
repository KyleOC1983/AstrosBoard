import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdisplayComponent } from './postdisplay.component';

describe('PostdisplayComponent', () => {
  let component: PostdisplayComponent;
  let fixture: ComponentFixture<PostdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
