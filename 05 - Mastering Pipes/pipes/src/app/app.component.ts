import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, ConvertPipe],
})
export class AppComponent {
  name = '';
  date = '';
  amount = '';
  height = 0;
  miles = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = value;
  }

  onHeightChange(value: string) {
    this.height = Number.parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = Number.parseFloat(value);
  }
}
