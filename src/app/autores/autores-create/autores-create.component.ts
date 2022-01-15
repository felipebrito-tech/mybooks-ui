import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';

import { Autor } from '../model/autor';
import { AutoresService } from './../services/autores.service';

@Component({
  selector: 'app-autores-create',
  templateUrl: './autores-create.component.html',
  styleUrls: ['./autores-create.component.scss']
})
export class AutoresCreateComponent implements OnInit {

  autor: Autor =  this.newAutor();

  constructor(private autoresService: AutoresService, public dialog: MatDialog, private router: Router) { }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

  createAutor(): void {
    this.autoresService.createAutor(this.autor)
          .pipe(
            catchError(error => {
              this.onError('Não foi possível cadastrar o autor!');
              console.log(error.message);
              return of([])
            })
          )
          .subscribe(
            () => {
              this.clearModel();
              this.router.navigateByUrl('autores');
            }
          );
  }

  clearModel(): void {
    this.autor = this.newAutor();
  }

  newAutor() {
    return { codAu: 0, nome: '' };
  }
}
