/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyComponent} from './currency.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CurrencyService} from '../../service/currency.service';
import {HttpClientModule} from '@angular/common/http';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
            providers : [CurrencyService],
            imports: [RouterTestingModule, HttpClientModule],
      declarations: [ CurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
