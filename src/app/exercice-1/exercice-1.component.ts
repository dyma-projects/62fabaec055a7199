import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice-1',
  templateUrl: './exercice-1.component.html',
})
export class Exercice1Component implements OnInit {
  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  colors: string;
  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    console.log(event.key);
    event.key == 'ArrowUp' ? (this.colors = 'blue') : null;
    event.key == 'ArrowRight' ? (this.colors = 'green') : null;
    event.key == 'ArrowLeft' ? (this.colors = 'red') : null;
    event.key == 'ArrowDown' ? (this.colors = 'grey') : null;

  }
  constructor() {
    this.colors = 'green';
  }

  ngOnInit() {}
}
//ArrowUp
//ArrowRight
//ArrowLeft
//ArrowDown
