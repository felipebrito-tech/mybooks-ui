import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';

import { Autor } from '../model/autor';
import { AutoresService } from '../services/autores.service';

@Component({
  selector: 'app-autores-edit',
  templateUrl: './autores-edit.component.html',
  styleUrls: ['./autores-edit.component.scss']
})
export class AutoresEditComponent implements OnInit {

  autor: Autor =  this.newAutor();

  constructor(private autoresService: AutoresService, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
    const codAu: number = this.activatedRoute.snapshot.params['codAu'];

    this.autoresService.getAutorBy(codAu)
                        .pipe(
                          catchError(error => {
                            this.onError('Não foi possível carregar o autor!');
                            console.log(error.message);
                            return of(this.newAutor())
                          })
                        )
                        .subscribe(
                          response => {
                            this.autor = response;
                          }
                        );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

  updateAutor(): void {
    this.autoresService.updateAutor(this.autor)
          .pipe(
            catchError(error => {
              this.onError('Não foi possível atualizar o autor!');
              console.log(error.message);
              return of(this.newAutor())
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
