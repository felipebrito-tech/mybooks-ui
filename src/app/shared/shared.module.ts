import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './component/error-dialog/error-dialog.component';
import { AssuntosPipe } from './pipes/assuntos.pipe';
import { AutoresPipe } from './pipes/autores.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    AutoresPipe,
    AssuntosPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    AutoresPipe,
    AssuntosPipe
  ]
})
export class SharedModule { }
