import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AssuntosRoutingModule } from './assuntos-routing.module';
import { AssuntosComponent } from './assuntos/assuntos.component';
import { AssuntosCreateComponent } from './assuntos-create/assuntos-create.component';
import { AssuntosEditComponent } from './assuntos-edit/assuntos-edit.component';

@NgModule({
  declarations: [
    AssuntosComponent,
    AssuntosCreateComponent,
    AssuntosEditComponent
  ],
  imports: [
    CommonModule,
    AssuntosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class AssuntosModule { }
