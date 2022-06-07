export class Favoritos {
  id?: number;
  titulo?: string;
  imagem?: string;
  idFilme?: number;
  idSerie?: number;

  constructor(id?: number, favoritos: Favoritos = {}) {
    this.id = id;
    this.titulo = favoritos.titulo;
    this.imagem = favoritos.imagem;
    this.idFilme = favoritos.idFilme;
    this.idSerie = favoritos.idSerie;
  }
}
