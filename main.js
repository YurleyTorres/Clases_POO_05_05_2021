// class vaso{
//     constructor({...arg}){
//         this.diametro = arg.diametro;
//         this.alto = arg.alto;
//         this.material = arg.material;
//     }
//     llenar(p1=''){
//         return `El vaso esta lleno ${(p1) ? `de ${p1} su clase es vaso` : `de la clase vaso` }`;
//     }
//     vaciar(){
//         return `El vaso esta vacio`;
//     }
// }
// class vasoVidrio extends baso{
//     constructor({...arg}){
//         super({...arg});
//         this.estampado = arg.estampado;
//     }
//     llenar(p1=''){
//         return `El vaso esta lleno ${(p1) ? `de ${p1} su clase es vasoVidrio` : `de la clase vasoVidrio` }`;
//     }
//     get getllenarVaso(){
//         return super.llenar();
//     }
// }
// class vasoPorcelana extends basoVidrio{
//     constructor({...arg}){
//         super({...arg});
//     }
//     llenar(){
//         return super.getllenarBaso;
//     }
// }
// const datos = {
//     diametro: "Cudrado",
//     alto: "25 cm",
//     material: "Porcelana",
//     estampado: "Luna",
// }
// const obj = new vasoPorcelana(datos);
// console.log(obj);
// console.log(obj.llenar('Agua'));

class humano{
    static name = null;
    constructor(){
        
    }
    static getinstace(){
        return (name instanceof Object) ? name : new humano();
    }
    saludar(){
        return `HOLA COMO ESTAS`;
    }
}

console.log(humano.getinstace());

