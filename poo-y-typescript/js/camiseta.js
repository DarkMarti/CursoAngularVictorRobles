class Camiseta{
    public color;
    private modelo;
    private marca;
    private talla;
    private precio;

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }

}

var camiseta = new Camiseta();
camiseta.setColor("Azul");

console.log(camiseta);