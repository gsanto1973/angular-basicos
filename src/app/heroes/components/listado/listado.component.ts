import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Thor',
    'Hulk',
    'Capitán América',
  ];

  heroeBorrado: string = '';

  borrarHeroePrimero(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

  borrarHeroeUltimo(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
/*
Esta clase es la creada or defecto, angular implementa el OnInit por defecto
El ngOnInit se ejecuta después del constructor y se pueden hacer llamados a servicios por ejemplo
export class ListadoComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
*/
