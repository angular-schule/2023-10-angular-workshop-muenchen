import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: '😎',
})
export class DummyDashboardComponent {
}

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppComponent]

  })
  // // Shallow Component Test
  // .overrideComponent(AppComponent, {
  //   set: { imports: [], schemas: [NO_ERRORS_SCHEMA] }
  // })

  .overrideComponent(AppComponent, {
    remove: { imports: [DashboardComponent] },
    add: { imports: [DummyDashboardComponent] }
  })
  );

  it(`should have the 'Book Rating' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Book Rating');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Book Rating');
  });
});
