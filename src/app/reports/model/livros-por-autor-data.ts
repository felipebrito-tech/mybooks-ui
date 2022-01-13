import { Autor } from './../../autores/model/autor';
import { LivrosPorAutor } from './livros-por-autor';

export interface LivrosPorAutorData {
	codAu: number;
  nome: string;
	codL: number;
	titulo: string;
	editora: string;
	edicao: number;
	anoPublicacao: string;
  assuntos: string;
}
