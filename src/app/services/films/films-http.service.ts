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
    //console.log( 'impl: ', err );
    if( err instanceof ErrorEvent ){
      clientErrOutput = err.message;
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
