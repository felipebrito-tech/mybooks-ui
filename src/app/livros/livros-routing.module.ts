import { LivrosEditComponent } from './livros-edit/livros-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosCreateComponent } from './livros-create/livros-create.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  { path: '', component: LivrosComponent },
  { path: 'novo', component: LivrosCreateComponent },
  { path: 'editar/:codL', component: LivrosEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
