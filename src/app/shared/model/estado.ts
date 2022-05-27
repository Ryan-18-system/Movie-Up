export class Estado {
  name?:string;
  uf?: string;
  cities?: Array<Object>;
  constructor(estado : Estado = {}) {
    this.uf = estado.uf;
    this.cities = estado.cities;
    this.name = estado.name
  }

}
