
//simula un POJO
export class Producto{

    nombre:string=undefined;
    precio:number=undefined;
    fila:string=undefined;
    codigo:number=undefined;
    stock:number=undefined;

    constructor(pnombre:string, pprecio:number, pcodigo:number, pfila:string=undefined, pstock:number=undefined){
        this.nombre=pnombre;
        this.precio=pprecio;
        this.fila=pfila;
        this.codigo=pcodigo;
        this.stock=pstock;
    }
    
}