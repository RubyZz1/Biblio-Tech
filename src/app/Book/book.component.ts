import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from '../bibliotech';
import { BOOKS } from '../mock-bibliotech';

@Component({
  selector: 'book',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="book">
      <h2>{{ book.title }}</h2>
      <p>Résumé: {{ book.resume }}</p>
      <img [src]="book.image" alt="Image du livre" />
      <p>Date de création: {{ book.createdAt | date }}</p>
      <p>Date de mise à jour: {{ book.updatedAt | date }}</p>
    </div>
    <div *ngIf="!book">
      <p>Aucun livre sélectionné.</p>
    </div>
  `,
  styles: [],
})
export class BookComponent {
    @Input ('value')
    book : Book | undefined
}
