import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';

import { Assunto } from '../model/assunto';
import { AssuntosService } from '../services/assuntos.service';

@Component({
  selector: 'app-assuntos-edit',
  templateUrl: './assuntos-edit.component.html',
  styleUrls: ['./assuntos-edit.component.scss']
})
export class AssuntosEditComponent implements OnInit {

  assunto: Assunto = this.newAssunto();

  constructor(private assuntosService: AssuntosService, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
    const codAs: number = this.activatedRoute.snapshot.params['codAs'];

    this.assuntosService.getAssuntoBy(codAs)
                        .pipe(
                          catchError(error => {
                            this.onError('Não foi possível carregar o assunto!');
                            console.log(error.message);
                            return of(this.newAssunto())
                          })
                        )
                        .subscribe(
                          response => {
                            this.assunto = response;
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

  updateAssunto(): void {
    this.assuntosService.updateAssunto(this.assunto)
          .pipe(
            catchError(error => {
              this.onError('Não foi possível atualizar o assunto!');
              console.log(error.message);
              return of(this.newAssunto())
            })
          )
          .subscribe(
            () => {
              this.clearModel();
              this.router.navigateByUrl('assuntos');
            }
          );
  }

  clearModel(): void {
    this.assunto = this.newAssunto();
  }

  newAssunto() {
    return { codAs: 0, descricao: '' };
  }
}
