import { Autor } from './../../autores/model/autor';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autores'
})
export class AutoresPipe implements PipeTransform {

  transform(value: Autor[]): string {
    return value.map(autor => autor.nome).join(', ');
  }

}
