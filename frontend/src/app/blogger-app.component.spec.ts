import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BloggerAppComponent } from './blogger-app.component';

describe('BloggerAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BloggerAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BloggerAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-client'`, () => {
    const fixture = TestBed.createComponent(BloggerAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BloggerAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('app-client app is running!');
  });
});
