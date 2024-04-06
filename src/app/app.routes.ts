import { Routes } from '@angular/router';
import { BookComponent } from './Book/book.component';
import { BibliotechComponent } from './Bibliotech/bibliotech.component';

export const routes: Routes = [
    {path: 'book', component: BookComponent},
    {path: '', component: BibliotechComponent},
];
