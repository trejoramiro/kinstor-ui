import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BOOKS } from '../books'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private recommendationsUrl = 'https://sqijygkgql.execute-api.us-west-2.amazonaws.com/test/recommendation';

  constructor(private http: HttpClient) { }

  getBooks(bookTitle: string): Observable<any> {
    return this.http.get<any>(this.recommendationsUrl + `?BookTitle=${bookTitle}`);
  }

  getDummyData() {
    return this.generateNumberOfBooks(13);
  }

  private generateNumberOfBooks(number: number) {
    let gridList = [];
    let startIndex = 0;
    for(let i = 0; i < number; i++) {
      gridList.push(BOOKS[startIndex]);
      startIndex++
      if (startIndex === (BOOKS.length - 1)) {
        startIndex = 0
      }
    }
    return gridList;
  }
}
