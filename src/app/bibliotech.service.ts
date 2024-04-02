import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page, Book } from './bibliotech';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BibliotechService {

  bookUrl = 'api/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> { // Correction du nom de la méthode
    return this.http.get<Book[]>(this.bookUrl).pipe(
        tap((data) => console.log(data))
    );
  }
}
