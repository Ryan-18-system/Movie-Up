import { Filme } from "./Filme";

export class Critica {
  id?: number;
  mensagem?: string;
  nomeDoCritico?: string;
  id_filme?: number;
  critica?: Array<Critica>;
  filme?: Array<Filme>;

  constructor(id?: number, critica: Critica = {}) {
    this.id = id;
    this.mensagem = critica.mensagem;
    this.nomeDoCritico = critica.nomeDoCritico;
    this.id_filme = critica.id_filme;
    this.critica = critica.critica;
    this.filme = critica.filme
  }


}

