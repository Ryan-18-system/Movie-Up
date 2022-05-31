export class Cidade {
  id?: string
  name?: string;
  uf?: string;

  constructor(cidade: Cidade = {}) {
    this.uf = cidade.uf;
    this.id = cidade.id;
    this.name = cidade.name
  }
}
