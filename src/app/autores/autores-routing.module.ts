import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoresCreateComponent } from './autores-create/autores-create.component';
import { AutoresEditComponent } from './autores-edit/autores-edit.component';
import { AutoresComponent } from './autores/autores.component';

const routes: Routes = [
  { path: '', component: AutoresComponent },
  { path: 'novo', component: AutoresCreateComponent },
  { path: 'editar/:codAu', component: AutoresEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
