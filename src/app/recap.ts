
//CONCEPTOS DE TYPESCRIPT----------------

const username:string = 'angie';
//funcion
const suma = (a:number, b :number) => {
  return a+b;
}
suma(1,2);

//creando objeto con constructor---------
class Person{
  name:string;
  age:number;

  //constructor
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
}

//usandoo el objeto creado--------------
const miNombre = new Person("angie", 21);
miNombre.age;
miNombre.name;
