import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CurrencyService} from '../../service/currency.service';
import {CurrencyModel} from '../../model/currency.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
    private selectedCurrency: CurrencyModel = new CurrencyModel();
    private id = this.route.snapshot.params['id'];
    constructor(private route: ActivatedRoute,
                private currencyService: CurrencyService) {
    console.log('Lazy loading of CurrencyComponent');
  }
  ngOnInit() {
      this.getCurrency();
  }

  getCurrency() {
      this.currencyService.getCurrencyById(this.id).subscribe(currency => {
          this.selectedCurrency = currency;
      },error => {
          this.selectedCurrency = null;
      });
  }
}
