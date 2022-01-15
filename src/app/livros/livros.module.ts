import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/livros.component';
import { LivrosCreateComponent } from './livros-create/livros-create.component';
import { LivrosEditComponent } from './livros-edit/livros-edit.component';


@NgModule({
  declarations: [
    LivrosComponent,
    LivrosCreateComponent,
    LivrosEditComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class LivrosModule { }
