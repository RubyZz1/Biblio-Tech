import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../Book/book.component';
import { Book } from '../bibliotech';
import { BibliotechService } from '../bibliotech.service';

@Component({
  selector: 'bibliotech',
  standalone: true,
  imports: [CommonModule, BookComponent],
  template: `
    <h1>Liste des Livres</h1>
    <ng-container *ngFor="let book of bibliotech">
      <book [value]="book"></book>
    </ng-container>
  `,
  styles: [],
})
export class BibliotechComponent {
  bibliotech: Book[] = [];

  constructor(private bibliotechService: BibliotechService) {}

  ngOnInit() {
    this.bibliotechService
      .getAllBooks()
      .subscribe((data) => (this.bibliotech = data));
  }
}
