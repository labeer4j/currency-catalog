import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency.component';
const routes: Routes = [
  { path: 'currency', component: CurrencyComponent },
  { path: 'currency/:id',component:CurrencyComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CurrencyComponent]
})
export class CurrencyEditModule { }
