function sumar(a: number, b:number){
    return a + b;
}


const sumarFlecha = (a:number, b:number ): number =>{
    return a + b;
}

function multiplcar(number: number, otherNumber?: number, base:number = 2):number{
    return number * base;
}
/*
const resultado = multiplcar(5, 10);

console.log(resultado);*/


interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}


function curar(personaje: PersonajeLOR, curarX): void{
    personaje.pv += curarX;
    console.log(personaje);
    
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:',this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();