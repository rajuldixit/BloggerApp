import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFeedsComponent } from './blog-feeds.component';

describe('BlogFeedsComponent', () => {
  let component: BlogFeedsComponent;
  let fixture: ComponentFixture<BlogFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
