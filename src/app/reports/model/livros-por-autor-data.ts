import { Autor } from './../../autores/model/autor';
import { LivrosPorAutor } from './livros-por-autor';

export interface LivrosPorAutorData {
	autor: Autor;
  livros: LivrosPorAutor;
}
