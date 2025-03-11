

export class Todo {
  public id: number = Math.random();
  public texto: string;
  public completado: boolean = false;

  constructor(texto: string){
    this.texto = texto;
  }
}
