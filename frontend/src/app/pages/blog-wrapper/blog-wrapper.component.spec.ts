import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWrapperComponent } from './blog-wrapper.component';

describe('BlogWrapperComponent', () => {
  let component: BlogWrapperComponent;
  let fixture: ComponentFixture<BlogWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
