import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarshipsHttpService {

  handleError( err: HttpErrorResponse ){
    let clientErrMsg: string;
    //client-side
    if( err instanceof ErrorEvent ){
      clientErrMsg = err.message;
    }
    //server-side
    else {
      clientErrMsg = 'Server error. Please try request again later.';
    }
    return throwError(clientErrMsg);
  }
  getStarshipsByUrl(url: string): Observable<object>{
    return this.http.get(url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }
  constructor(private http: HttpClient) { }
}
