import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'livros' },
  {
    path: 'assuntos',
    loadChildren: () => import('./assuntos/assuntos.module').then(m => m.AssuntosModule)
  },
  {
    path: 'assuntos/novo',
    loadChildren: () => import('./assuntos/assuntos.module').then(m => m.AssuntosModule)
  },
  {
    path: 'assuntos/editar/:codAs',
    loadChildren: () => import('./assuntos/assuntos.module').then(m => m.AssuntosModule)
  },
  {
    path: 'autores',
    loadChildren: () => import('./autores/autores.module').then(m => m.AutoresModule)
  },
  {
    path: 'autores/novo',
    loadChildren: () => import('./autores/autores.module').then(m => m.AutoresModule)
  },
  {
    path: 'autores/editar/:codAu',
    loadChildren: () => import('./autores/autores.module').then(m => m.AutoresModule)
  },
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule)
  },
  {
    path: 'livros/novo',
    loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule)
  },
  {
    path: 'livros/editar/:codL',
    loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule)
  },
  {
    path: 'reports/livros-por-autor',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
