export class Usuario {
  id?: string;
  email?: string;
  senha?: string;
  nome?: string;

  constructor(id?: string, usuario: Usuario = {}) {
    this.id = id;
    this.email = usuario.email;
    this.nome = usuario.nome;
    this.senha = usuario.senha;

  }

}
