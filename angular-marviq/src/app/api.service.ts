import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Fabryka } from './fabryka';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const localUrl = 'assets/data/fabryka.json';
const apiUrl = 'http://localhost:3000/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Simple GET data
  // getFabryka() {
  //   return this.http.get(localUrl);
  // }

  // GET data as a type
  // getFabryka(): Observable<HttpResponse<Fabryka[]>> {
  //   return this.http.get<Fabryka[]>(
  //     localUrl, { observe: 'response' });
  // }

  // GET data with error handler
  // getFabryka(): Observable<any> {
  //   httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
  //   return this.http.get<Fabryka[]>(localUrl, httpOptions).pipe(
  //     retry(3), catchError(this.handleError<Fabryka[]>('getFabryka', [])));
  // }

  // GET data by ID
  getFabrykaById(id: any): Observable<any> {
    return this.http.get<Fabryka>(localUrl + id).pipe(
      retry(3), catchError(this.handleError<Fabryka>('getFabryka')));
  }

  // GET data with custom params
  // getFabryka(term: string): Observable<any> {
  //   term = term.trim();
  //   const options = term ? { params: new HttpParams().set('name', term) } : {};
  //   return this.http.get<Fabryka[]>(localUrl, options).pipe(
  //     retry(3), catchError(this.handleError<Fabryka[]>('getFabryka', [])));
  // }

  getFabryka(): Observable<any> {
    const stringparams = 'name=iphone';
    const params = new HttpParams({fromString: stringparams});
    const options = { params };
    return this.http.get<Fabryka[]>(localUrl, options).pipe(
      retry(3), catchError(this.handleError<Fabryka[]>('getFabryka', [])));
  }

  addFabryka(fabryka: Fabryka): Observable<Fabryka> {
    return this.http.post<Fabryka>(localUrl, fabryka, httpOptions)
      .pipe(
        catchError(this.handleError('addFabryka', fabryka))
      );
  }

  updateFabryka(id: any, fabryka: Fabryka): Observable<Fabryka> {
    return this.http.put<Fabryka>(localUrl + id, fabryka, httpOptions)
      .pipe(
        catchError(this.handleError('addFabryka', fabryka))
      );
  }

  deleteFabryka(id: any): Observable<Fabryka> {
    return this.http.delete<Fabryka>(localUrl + id, httpOptions)
      .pipe(
        catchError(this.handleError('addFabryka', fabryka))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
