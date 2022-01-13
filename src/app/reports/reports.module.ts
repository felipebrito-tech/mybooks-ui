import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LivrosPorAutorComponent } from './livros-por-autor/livros-por-autor.component';
import { ReportsRoutingModule } from './reports-routing.module';


@NgModule({
  declarations: [
    LivrosPorAutorComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ReportsModule { }
