import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/livros.component';


@NgModule({
  declarations: [
    LivrosComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class LivrosModule { }
