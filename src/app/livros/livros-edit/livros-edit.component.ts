import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, delay, of } from 'rxjs';
import { Assunto } from 'src/app/assuntos/model/assunto';
import { AssuntosService } from 'src/app/assuntos/services/assuntos.service';
import { Autor } from 'src/app/autores/model/autor';
import { AutoresService } from 'src/app/autores/services/autores.service';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';
import { Livro } from '../model/livro';
import { LivrosService } from '../services/livros.service';

@Component({
  selector: 'app-livros-edit',
  templateUrl: './livros-edit.component.html',
  styleUrls: ['./livros-edit.component.scss']
})
export class LivrosEditComponent implements OnInit {

  livro: Livro =  this.newLivro();
  autores: Autor[] = [];
  assuntos: Assunto[] = [];
  autoresFormControl = new FormControl('', Validators.required);
  assuntosFormControl = new FormControl('', Validators.required);

  constructor(private livrosService: LivrosService, private autoresService: AutoresService, private assuntosService: AssuntosService, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {
    const codL: number = this.activatedRoute.snapshot.params['codL'];

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

                    this.livrosService.getLivroBy(codL)
                        .pipe(
                          catchError(error => {
                            this.onError('Não foi possível carregar o livro!');
                            console.log(error.message);
                            return of(this.newLivro())
                          })
                        )
                        .subscribe(
                          response => {
                            this.livro = response;

                            this.assuntosFormControl.setValue(response.assuntos.map(assunto => assunto.codAs));
                            this.autoresFormControl.setValue(response.autores.map(autor => autor.codAu));
                          }
                        );
                  }
                );
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

  updateLivro(): void {
    console.log(this.livro);
    this.livrosService.updateLivro(this.livro)
          .pipe(
            catchError(error => {
              this.onError('Não foi possível atualizar o livro!');
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
