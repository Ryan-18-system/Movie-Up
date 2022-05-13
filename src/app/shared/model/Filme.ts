export class Filme{
  id?: string;
  titulo?: string;
  imagem?: string;
  dataLancamento?: string;
  sinopse?:string;
  genero?: string;
  diretor?: string;
  atores?: Array<string>;
  duracao?: number;

  constructor(id?: string, filme: Filme = {}) {
    this.id = id;
    this.titulo = filme.titulo;
    this.imagem = filme.imagem;
    this.dataLancamento = filme.dataLancamento;
    this.sinopse = filme.sinopse;
    this.genero = filme.genero;
    this.diretor = filme.diretor;
    this.atores = filme.atores;
    this.duracao = filme.duracao;
  }

}
