import { Routes } from '@angular/router';
import { BookComponent } from './Book/book.component';
import { BibliotechComponent } from './Bibliotech/bibliotech.component';

export const routes: Routes = [
    {path: '', component: BookComponent},
    {path: 'bibliotech', component: BibliotechComponent},
];
