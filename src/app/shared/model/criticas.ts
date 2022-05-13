export class Critica {
  id?: string;
  mensagem?: string;
  nomeDaObra?: string;
  nomeDoCritico?: string;

  constructor(id?: string, critica: Critica = {}) {
    this.id = id;
    this.mensagem = critica.mensagem;
    this.nomeDoCritico = critica.nomeDoCritico;
    this.nomeDaObra = critica.nomeDaObra;
  }

}

