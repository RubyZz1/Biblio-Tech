import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { BOOKS } from './mock-bibliotech';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const bibliotech = BOOKS;
        return {bibliotech}
    }
}