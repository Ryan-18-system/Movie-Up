export class Critica {
  id?: number;
  mensagem?: string;
  nomeDoCritico?: string;
  id_filme?: number;
  critica?: Array<Critica>;

  constructor(id?: number, critica: Critica = {}) {
    this.id = id;
    this.mensagem = critica.mensagem;
    this.nomeDoCritico = critica.nomeDoCritico;
    this.id_filme = critica.id_filme;
    this.critica = critica.critica;
  }

}

