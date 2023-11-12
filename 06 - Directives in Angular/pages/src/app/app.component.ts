import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [
    {
      title: 'At the Beach',
      url: 'https://unsplash.com/es/fotos/orilla-del-mar-durante-la-hora-dorada-KMn4VEeEPR8',
    },
    {
      title: 'Playing tennis',
      url: 'https://unsplash.com/es/fotos/hombre-jugando-tenis-WqI-PbYugn4',
    },
    {
      title: 'Coding',
      url: 'https://unsplash.com/es/fotos/monitor-que-muestra-programacion-java-OqtafYT5kTw',
    },
    {
      title: 'Running',
      url: 'https://unsplash.com/es/fotos/par-de-zapatillas-adidas-azules-y-blancas-XiZ7pRvCzro',
    },
  ];
}
