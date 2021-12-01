function ClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   
  @ClassDecorator
  class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }
  }
   
 


@ClassDecorator
class miSuperClase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('hola mundo');
    }
}

console.log(miSuperClase);

const miClase= new miSuperClase ();
console.log(miClase.miPropiedad);