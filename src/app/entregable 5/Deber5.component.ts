import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
// Lista de perritos en adopción
products = [
  { 
    name: 'Max', 
    size: 'Grande', 
    age: '2 años', 
    description: 'Max es un labrador lleno de energía, ideal para familias activas que disfruten de largos paseos.',
    image: 'https://media2.giphy.com/media/5PhK5JmRt53bRm58H1/giphy.gif?cid=6c09b9520qn4yozvomugydzs4rsk1hpb183axv0zxx7gyr8h&ep=v1_gifs_search&rid=giphy.gif&ct=g' 
  },
  { 
    name: 'Luna', 
    size: 'Mediana', 
    age: '1 año', 
    description: 'Luna es una perrita juguetona y cariñosa, perfecta para un hogar con niños.',
    image: 'https://media.tenor.com/8_vS26En3FoAAAAM/happy-birthday-funny-happy-birthday.gif' 
  },
  { 
    name: 'Rocky', 
    size: 'Pequeño', 
    age: '4 años', 
    description: 'Rocky es un chihuahua valiente y leal, buscando un hogar tranquilo y amoroso.',
    image: 'https://media1.giphy.com/media/k2Da0Uzaxo9xe/200.gif?cid=6c09b952iteipw3iuzvnnv0p1pyf10hynj4cap3tz9wbq59e&ep=v1_gifs_search&rid=200.gif&ct=g' 
  },
  { 
    name: 'Daisy', 
    size: 'Mediana', 
    age: '6 meses', 
    description: 'Daisy es una cachorrita curiosa que adora explorar y necesita una familia paciente.',
    image: 'https://media.tenor.com/_l_5p1vtSE0AAAAM/chiens-funnyanimals.gif' 
  },
  { 
    name: 'Simba', 
    size: 'Grande', 
    age: '3 años', 
    description: 'Simba es un pastor alemán muy inteligente, ideal para familias que disfruten entrenar a sus mascotas.',
    image: 'https://i.pinimg.com/originals/6f/26/c0/6f26c09a42fb09b28b816dbc6b4bae25.gif' 
  },
  { 
    name: 'Bella', 
    size: 'Pequeña', 
    age: '2 años', 
    description: 'Bella es una perrita rescatada, dulce y tímida, buscando un hogar lleno de amor.',
    image: 'https://i.pinimg.com/originals/1d/ff/2e/1dff2e53764da3d1019cbce5704ffc8b.gif' 
  },
  { 
    name: 'Toby', 
    size: 'Grande', 
    age: '5 años', 
    description: 'Toby es un perro tranquilo que ama las siestas y los abrazos. ¡Perfecto para una casa espaciosa!',
    image: 'https://i.pinimg.com/originals/72/82/f5/7282f50257fb032a45d68583ea83e765.gif' 
  },
];

// Configuración del carrusel (responsiveOptions)
responsiveOptions = [
  {
    breakpoint: '2060px',
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '480px',
    numVisible: 1,
    numScroll: 1
  },
];

// Método para determinar la severidad basado en el tamaño
getSeverity(size: string): 'success' | 'info' | 'warning' | 'secondary' {
  switch (size) {
    case 'Pequeño':
      return 'success'; // Verde: Ideal para espacios reducidos
    case 'Mediana':
      return 'info'; // Azul: Versátil
    case 'Grande':
      return 'warning'; // Amarillo: Necesita espacio
    default:
      return 'secondary'; // Gris: Tamaño desconocido
  }
}
}
