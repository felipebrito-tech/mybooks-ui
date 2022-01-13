import { Assunto } from './../../assuntos/model/assunto';
import { Autor } from './../../autores/model/autor';

export interface Livro {
	codL: number;
	titulo: string;
	editora: string;
	edicao: number;
	anoPublicacao: string;
  autores: Autor[];
  assuntos: Assunto[];
}
