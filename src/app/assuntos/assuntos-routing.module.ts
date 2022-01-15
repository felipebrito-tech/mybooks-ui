import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssuntosCreateComponent } from './assuntos-create/assuntos-create.component';
import { AssuntosEditComponent } from './assuntos-edit/assuntos-edit.component';
import { AssuntosComponent } from './assuntos/assuntos.component';

const routes: Routes = [
  { path: '', component: AssuntosComponent },
  { path: 'novo', component: AssuntosCreateComponent },
  { path: 'editar/:codAs', component: AssuntosEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssuntosRoutingModule { }
