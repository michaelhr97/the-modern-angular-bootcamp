import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  term = '';

  onInput(target: any) {
    this.term = target.value;
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
  }
}
