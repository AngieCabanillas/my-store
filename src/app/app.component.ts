import { Component } from '@angular/core';
//importando interfaz product para usarla como tipo de dato para mi array
import{Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='angie';
  age=21;
  img = 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20Como%20elegir%20un%20nuevo%20gatito.jpg?itok=WOC5m4KQ';
  btnDisabled = true;

  //objeto
  person = {
    name:'angie',
    age: 21,
    avatar:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20Como%20elegir%20un%20nuevo%20gatito.jpg?itok=WOC5m4KQ',
  }

  //creando array de objetos
  products: Product[] = [
    {
      name:'bicicleta',
      price:350,
      image:'./assets/images/bici.jpg',
      category: 'para niños',
    },
    {
      name:'muñeca',
      price:100,
      image:'./assets/images/muñequita.jpg',
    },
    {
      name:'reloj',
      price:200,
      image:'./assets/images/relojito.jpg',
    },
    {
      name:'bicicleta',
      price:350,
      image:'./assets/images/bici.jpg',
      category: 'para niños',
    },
    {
      name:'muñeca',
      price:100,
      image:'./assets/images/muñequita.jpg',
    },
    {
      name:'reloj',
      price:200,
      image:'./assets/images/relojito.jpg',
    }
  ];


  //creando array
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';



  cambiarBoton(){
    this.btnDisabled = !this.btnDisabled;
  }

  incrementarEdad(){
    this.person.age ++;
  }

  conteoScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  copiarNombre(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
