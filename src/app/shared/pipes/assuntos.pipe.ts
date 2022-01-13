import { Assunto } from './../../assuntos/model/assunto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assuntos'
})
export class AssuntosPipe implements PipeTransform {

  transform(value: Assunto[]): string {
    return value.map(assunto => assunto.descricao).join(' | ');
  }

}
