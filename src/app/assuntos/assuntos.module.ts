import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AssuntosRoutingModule } from './assuntos-routing.module';
import { AssuntosComponent } from './assuntos/assuntos.component';

@NgModule({
  declarations: [
    AssuntosComponent
  ],
  imports: [
    CommonModule,
    AssuntosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class AssuntosModule { }
