import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment.prod';


const TITLE = 'Available currencies';
const REST_API_URL = environment.restApiUrl;
const CURRENCIES_URL = REST_API_URL +  'currencies';
const SEARCH_CURRENCIES_URL = REST_API_URL +  'searchcurrencies';
const CURRENCY_URL = REST_API_URL + 'currency/';

@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getTitle() {
    return TITLE;
  }

  getCurrencys(): Observable<any> {
    return this.http.get(CURRENCIES_URL);
  }

  getCurrencyById(id): Observable<any> {
    return this.http.get(CURRENCY_URL + id);
  }

  getPagedCurrencies(searchText, searchPropertie, from, to): Observable<any> {
    return this.http.get(CURRENCIES_URL + '/' + searchText + '/' + searchPropertie + '/' + from + '/' + to);
  }

  getFiltredCurrencies(searchText, searchPropertie): Observable<any> {
    return this.http.get(SEARCH_CURRENCIES_URL + '/' + searchText + '/' + searchPropertie);
  }
}
