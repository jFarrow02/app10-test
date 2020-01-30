import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsHttpService {

  handleError( err: HttpErrorResponse ){
    let clientErrOutput;
    //client-side err
    if( err.error instanceof ErrorEvent ){
      clientErrOutput = err.error.message;
    } 
    //server-side err
    else {
      clientErrOutput = 'Error processing this request. Please try again later.'
    }
    
    return throwError(clientErrOutput);
  }

  getFilmsByUrl( url: string ): Observable<object>{
    return this.http.get( url )
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }
  constructor(private http: HttpClient) { }
}
