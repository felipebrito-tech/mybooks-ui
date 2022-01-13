import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosPorAutorComponent } from './livros-por-autor/livros-por-autor.component';

const routes: Routes = [
  { path: '', component: LivrosPorAutorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
