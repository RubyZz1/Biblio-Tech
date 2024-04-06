import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../Book/book.component';
import { Book } from '../bibliotech';
import { BibliotechService } from '../bibliotech.service';
import { BOOKS } from '../mock-bibliotech';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'bibliotech',
  standalone: true,
  imports: [CommonModule, BookComponent, FormsModule],
  template: `
    <h1>Liste des Livres</h1>
    <input
      type="text"
      [(ngModel)]="searchTerm"
      placeholder="Rechercher un livre..."
      (input)="filterBooks()"
      class="search-box"
    />
    <div class="bibliotech-container">
      <ng-container *ngFor="let book of filteredBooks">
        <book [value]="book" ></book>
      </ng-container>
    </div>
  `,
  styles: [
    `
      h1 {
        color: #333;
        text-align: center;
        margin-bottom: 20px;
        font-family: 'Arial', sans-serif;
      }
      .bibliotech-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        padding: 0 20px;
      }
      book {
        display: block;
        border: 1px solid #ddd;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        overflow: hidden;
        transition: transform 0.2s ease;
      }
      book:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class BibliotechComponent {
  bibliotech: Book[] = BOOKS;
  filteredBooks: Book[] = BOOKS; // Liste filtrée pour l'affichage
  searchTerm: string = ''; // Terme de recherche

  filterBooks() {
    this.filteredBooks = this.bibliotech.filter((book) =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  /*selectBook(book: Book) {
    this.selectedBook = book;
    
  }*/

  /*bibliotech: Book[] = [];

  constructor(private bibliotechService: BibliotechService) {}

  ngOnInit() {
    this.bibliotechService
      .getAllBooks()
      .subscribe((data) => (this.bibliotech = data));
  }*/
}
