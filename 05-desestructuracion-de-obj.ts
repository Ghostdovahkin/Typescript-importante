interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles:Detalles ;
}

interface Detalles {
    autor: string;
    anio: number;
}

const Reproductor: Reproductor= {
    volumen : 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {volumen,segundo,cancion,detalles } = Reproductor;
const {autor} = detalles;



//console.log ('El volumen actual es de :',volumen);
//console.log ('El segundo actual es de :',segundo);
//console.log ('La cancion actual es de :',cancion);
//console.log ('El autor actual es :',detalles.autor);
//

const dbz: string[] = ['goku', 'vegeta', 'trunks'];
const[ p1,p2,p3  ] = dbz;

console.log('personaje1: ', p1 );
console.log('personaje1: ', p2 );
console.log('personaje1: ', p3 );