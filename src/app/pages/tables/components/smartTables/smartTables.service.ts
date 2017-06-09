import {Injectable} from '@angular/core';

@Injectable()
export class SmartTablesService {

  smartTableData = [
    {
      NIM: 141524001,
      Nama: 'Mark',
      Sakit: 5,
      Izin: 4,
      Alpa: 0
    },
    {
      NIM: 141524002,
      Nama: 'Markus',
      Sakit: 5,
      Izin: 4,
      Alpa: 0
    },
    {
    NIM: 141524003,
    Nama: 'Markonah',
    Sakit: 5,
    Izin: 1,
    Alpa: 0
    },
    {
    NIM: 141524004,
    Nama: 'Ubed suaedi',
    Sakit: 0,
    Izin: 2,
    Alpa: 1
    },
    {
    NIM: 141524005,
    Nama: 'Istiqomah',
    Sakit: 3,
    Izin: 10,
    Alpa: 0
    },
    {
    NIM: 141524006,
    Nama: 'paulina',
    Sakit: 0,
    Izin: 0,
    Alpa: 9
    }
  ];

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.smartTableData);
      }, 2000);
    });
  }
}
