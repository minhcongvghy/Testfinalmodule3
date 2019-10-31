import { Injectable } from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:8081/books';
  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL);
  }

  createBook(book: Partial<Book>): Observable<Book> {
    return this.httpClient.post<Book>(this.API_URL , book);
  }

  editBook(book: Partial<Book>): Observable<Book> {
    return this.httpClient.patch<Book>(this.API_URL + '/' + book.id , book);
  }

}
