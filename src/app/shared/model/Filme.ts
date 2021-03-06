import { Critica } from "./criticas";

export class Filme{
  id?: number;
  titulo?: string;
  imagem?: string;
  imagemhr?: string;
  dataLancamento?: number;
  sinopse?:string;
  genero?: string;
  diretor?: string;
  atores?: Array<string>;
  duracao?: number;
  emalta?: string;
  favoritos?: string;
  emcartaz?: string;
  semana?: string;
  aclamados?: string;
  esperados?: string;
  criticas?: Array<Critica>;
  filme?: Array<Filme>;

  constructor(id?: number, filme: Filme = {}) {
    this.id = id;
    this.titulo = filme.titulo;
    this.imagem = filme.imagem;
    this.imagemhr = filme.imagemhr;
    this.dataLancamento = filme.dataLancamento;
    this.sinopse = filme.sinopse;
    this.genero = filme.genero;
    this.diretor = filme.diretor;
    this.atores = filme.atores;
    this.duracao = filme.duracao;
    this.emalta = filme.emalta;
    this.favoritos = filme.favoritos;
    this.emcartaz = filme.emcartaz;
    this.semana = filme.semana;
    this.aclamados = filme.aclamados;
    this.esperados  = filme.esperados;
    this.criticas = filme.criticas;
    this.filme = filme.filme;
  }

}
