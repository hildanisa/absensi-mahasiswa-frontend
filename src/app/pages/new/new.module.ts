import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewComponent } from './new.component';
import { routing } from './new.routing';
import { InputanComponent} from './components/inputan/inputan.component';

import { BrowserModule } from '@angular/platform-browser';


import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MaterialModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,MdTabsModule } from '@angular/material';


import 'hammerjs';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,

    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    Ng2SmartTableModule

  ],
  declarations: [
    NewComponent
  ]
})
export class NewModule {}
