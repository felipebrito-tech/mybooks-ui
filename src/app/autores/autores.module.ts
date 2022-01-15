import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores/autores.component';
import { AutoresCreateComponent } from './autores-create/autores-create.component';
import { AutoresEditComponent } from './autores-edit/autores-edit.component';


@NgModule({
  declarations: [
    AutoresComponent,
    AutoresCreateComponent,
    AutoresEditComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class AutoresModule { }
