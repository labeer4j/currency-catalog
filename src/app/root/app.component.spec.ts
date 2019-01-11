import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientModule, FormsModule, LoadingBarHttpClientModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'currency-catalog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('currency-catalog');
  });
});
