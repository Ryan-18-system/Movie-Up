export class Serie{
  id?: string;
  titulo?: string;
  imagem?: string;
  dataLancamento?: string;
  sinopse?:string;
  genero?: string;
  diretor?: string;
  atores?: Array<string>;
  temporadas?: number;

  constructor(id?: string, serie: Serie = {}) {
    this.id = id;
    this.titulo = serie.titulo;
    this.imagem = serie.imagem;
    this.dataLancamento = serie.dataLancamento;
    this.sinopse = serie.sinopse;
    this.genero = serie.genero;
    this.diretor = serie.diretor;
    this.atores = serie.atores;
    this.temporadas = serie.temporadas;

  }
}
