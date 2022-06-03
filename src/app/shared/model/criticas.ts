export class Critica {
  id?: number;
  mensagem?: string;
  nomeDaObra?: string;
  nomeDoCritico?: string;

  constructor(id?: number, critica: Critica = {}) {
    this.id = id;
    this.mensagem = critica.mensagem;
    this.nomeDoCritico = critica.nomeDoCritico;
    this.nomeDaObra = critica.nomeDaObra;
  }

}

