import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../service/currency.service';
import {Router} from '@angular/router';
import {CurrencyModel} from '../../model/currency.model';
import {PagerService} from '../../service/pager.service';
import {Subscription} from "rxjs/index";

@Component({
selector: 'app-currency-list',
templateUrl: './currency-list.component.html',
styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
private title: string;
private currencyList: CurrencyModel[];
subscription: Subscription;
private router: Router;
private baseURL = 'currency/';
searchPropertie = 'id';
searchText: any;
pageSize = 10;
pageSizeValues = [10, 50, 100];

constructor(
    private currencyService: CurrencyService,
    private _router: Router,
    private pagerService: PagerService) {}

// pager object
pager: any = {};

// paged items
pagedItems: any[];

ngOnInit() {
    this.title = this.currencyService.getTitle();
    this.searchCurrency();
}

rowClick(selectedCurrency) {
    this._router.navigateByUrl(this.baseURL + selectedCurrency.id + '');
}

setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.currencyList.length, page, this.pageSize);

    let searchParamText = this.searchText;
    if (this.searchText === undefined) {
      searchParamText = 'all';
    }
    // get current page of items
    this.subscription = this.currencyService.getPagedCurrencies(searchParamText, this.searchPropertie, this.pager.startIndex, this.pager.endIndex + 1).subscribe (data => {
        this.pagedItems = data;
    });
}

searchCurrency() {
    if (this.searchText != null && this.searchText !== '' && this.searchText !== undefined) {
        this.subscription = this.currencyService.getFiltredCurrencies(this.searchText, this.searchPropertie)
            .subscribe(data => {
                this.pagedItems = data;
                this.currencyList = data;
                this.setPage(1);
            });
    } else {
        this.subscription = this.currencyService.getCurrencys()
            .subscribe((currencysList) => {
                this.currencyList = currencysList;
                this.setPage(1);
            });
    }
}

changePageSize(pagesize) {
    this.pageSize = pagesize;
    this.searchCurrency();
}

ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
}
