import { Component, OnInit } from '@angular/core';
import { BibliotechService } from './bibliotech.service';
import { Book } from './bibliotech';

@Component({
  selector: 'app-root',
  templateUrl: './index.html', // Utilisation du template HTML
  styleUrls: ['./styles.css'] // Utilisation du fichier CSS
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  books: Book[] = [];

  constructor(private bibliotechService: BibliotechService) {}

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bibliotechService.getAllBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
        console.log(this.books); // Afficher les données dans la console
      },
      (error) => {
        console.error('Une erreur s\'est produite : ', error);
      }
    );
  }

  searchBooks() {
    // Implémentez la recherche des livres ici
  }
}
