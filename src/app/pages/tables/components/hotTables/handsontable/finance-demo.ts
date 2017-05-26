import { Component } from '@angular/core';
import { getFinanceData } from './data';

@Component({
  selector: 'finance-demo',
  templateUrl: './finance-demo.html'
})
export class FinanceDemoComponent {
   data:Array<any>;
   colHeaders:Array<string>;
   columns:Array<any>;
   options:any;

  constructor() {
    this.data = getFinanceData();
    this.colHeaders = ['Nama', 'Tanggal', 'Keterangan', 'Jumlah jam'];
    this.columns = [
      {type: 'numeric'},
      {type: 'date', dateFormat: 'DD/MM/YYYY', correctFormat: true},
      {type: 'numeric'},
      {type: 'numeric'}
    ];
    this.options = {
      height: 396,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true
    };
  }
}
