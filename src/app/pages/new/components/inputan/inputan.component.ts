import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {FilterPipe} from './pipe'
@Component({
  selector: 'app-root',
  templateUrl: './inputan.component.html',
  styleUrls: ['./inputan.component.css']
})
export class InputanComponent {
spaceScreens: Array<any>;
title: string;
names: any;
userName:string;
show: boolean = true;
selectedValue: string;
keterangan = ' S I A'.split(' ');
kelas = '1A 1B 1C 2A 2B 2C 3A 3B 3C 4A'.split(' ');
fakeArray = new Array(11);

 foods = [
   {value: 'steak-0', viewValue: 'Steak'},
   {value: 'pizza-1', viewValue: 'Pizza'},
   {value: 'tacos-2', viewValue: 'Tacos'}
 ];

 heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

tiles = [
  {text: 'One', cols: 3, rows:1, color: 'lightgrey'},
];

  constructor(private http:Http) {
  this.title = "Angular 2 simple search";
        this.names = ['Prashobh','Abraham','Anil','Sam','Natasha','Marry','Zian','karan']

    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);



  }

}
