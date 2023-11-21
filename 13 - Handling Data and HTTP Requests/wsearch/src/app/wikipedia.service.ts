import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}

  serch(term: string) {
    return 'I am wikipedia search results';
  }
}
