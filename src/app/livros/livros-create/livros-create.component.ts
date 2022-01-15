import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';

import { Livro } from '../model/livro';
import { LivrosService } from '../services/livros.service';
import { Assunto } from './../../assuntos/model/assunto';
import { AssuntosService } from './../../assuntos/services/assuntos.service';
import { Autor } from './../../autores/model/autor';
import { AutoresService } from './../../autores/services/autores.service';

@Component({
  selector: 'app-livros-create',
  templateUrl: './livros-create.component.html',
  styleUrls: ['./livros-create.component.scss']
})
export class LivrosCreateComponent implements OnInit {

  livro: Livro =  this.newLivro();
  autores: Autor[] = [];
  assuntos: Assunto[] = [];
  autoresFormControl = new FormControl('', Validators.required);
  assuntosFormControl = new FormControl('', Validators.required);

  constructor(private livrosService: LivrosService, private autoresService: AutoresService, private assuntosService: AssuntosService, public dialog: MatDialog, private router: Router) {
    this.autoresService.listAll()
        .pipe(
          catchError(error => {
            this.onError('Não foi possível carregar os autores!');
            console.log(error.message);
            return of([])
          })
        )
        .subscribe(
          result => {
            this.autores = result;
          }
        );

    this.assuntosService.listAll()
        .pipe(
          catchError(error => {
            this.onError('Não foi possível carregar os assuntos!');
            console.log(error.message);
            return of([])
          })
        )
        .subscribe(
          result => {
            this.assuntos = result;
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

  createLivro(): void {
    console.log(this.livro);
    this.livrosService.createLivro(this.livro)
          .pipe(
            catchError(error => {
              this.onError('Não foi possível cadastrar o livro!');
              console.log(error.message);
              return of(this.newLivro())
            })
          )
          .subscribe(
            () => {
              this.clearModel();
              this.router.navigateByUrl('livros');
            }
          );
  }

  clearModel(): void {
    this.livro = this.newLivro();
  }

  newLivro(): Livro {
    return {
            codL: 0,
            titulo: '',
            editora: '',
            edicao: 0,
            anoPublicacao: '',
            autores: [],
            assuntos: []
          };
  }
}
