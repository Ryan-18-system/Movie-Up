export class Cinema{
  id?: string;
  title?: string;
  imagem?: Array<Object>;
  duracao?: string;
  genres?: Array<String>;
  nationalSiteURL?: string;
  urlKey?:string;
  cityId?: string;
  constructor(id?: string, cinema: Cinema = {}) {
    this.id = id;
    this.title = cinema.title;
    this.imagem = cinema.imagem;
    this.genres = cinema.genres;
    this.urlKey = cinema.urlKey;
    this.cityId = cinema.cityId;
    this.nationalSiteURL = cinema.nationalSiteURL;

  }

}
