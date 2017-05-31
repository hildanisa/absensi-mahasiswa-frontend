import { Routes, RouterModule }  from '@angular/router';

import { Homeabsen } from './homeabsen.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Homeabsen
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
