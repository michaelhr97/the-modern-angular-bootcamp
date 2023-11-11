import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, CardComponent],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: '@nature',
      imageUrl: '../assets/tree.jpeg',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      username: '@mountainlover',
      imageUrl: '../assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: '@biking1222',
      imageUrl: '../assets/biking.jpeg',
      content: 'I did some biking today',
    },
    {
      title: 'Mountain Biking',
      username: '@biking1222',
      imageUrl: '../assets/biking.jpeg',
      content: 'I did some biking today',
    },
  ];
}
