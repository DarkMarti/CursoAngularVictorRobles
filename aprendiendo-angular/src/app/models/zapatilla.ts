export class Zapatilla{
 /* public nombre : string;
  public marca: string;
  public color:string;
  public precio:number;
  public stock:boolean;

  constructor(nombre:string,marca:string,color:string,precio:number,stock:boolean){
    this.nombre= nombre;
    this.marca = marca;
    this.color=color;
    this.precio=precio;
    this.stock=stock;
  }*/


  //Otra forma de hacer lo mismo en TypeScript es definir en el constructor.
  constructor(
    public nombre : string,
    public marca: string,
    public color:string,
    public precio:number,
    public stock:boolean
    ) {}
}
