import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class DataTablesService {

  construcor(private http: Http){}

  allmhs: Mahasiswa[];
  apiUrl: string = 'http://2002/Mahasiswa/';

 private handleError(error:any): Promise<any> {
   console.error('An error occurred', error);
   return Promise.reject(error.message || error);
 }


getallMahasiswa(kategori : string): Promise<Mahasiswa[]> {
   return this.http
     .get(this.apiUrl)
     .map((response: Response) => {
       let mhs = response.json();
       let listMahasiswa = new Array<Mahasiswa>();
       let i : number;
       for(i=0;i<mhs.length;i++)
       {
         listMahasiswa.push(
         {
           nama: mhs.results[i].namaMahasiswa,
           nim: mhs.results[i].nimMahasiswa,
         });
       }
       return listMahasiswa;
     }).toPromise()
     .catch(this.handleError);
 }
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.allmhs);
      }, 2000);
    });
  }
}
