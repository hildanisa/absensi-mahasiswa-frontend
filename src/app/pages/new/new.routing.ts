import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new.component';
import { InputanComponent} from './components/inputan/inputan.component';


const routes: Routes = [
  {
    path: '',
    component: NewComponent,
    children: [
    { path: 'inputan', component:InputanComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
