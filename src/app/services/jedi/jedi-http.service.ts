import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JediHttpService {

  handleError( err: HttpErrorResponse ){
    let clientErrOutput: string;
    //client-side err
    if( err.error instanceof ErrorEvent ){
      clientErrOutput = err.error.message;
    }
    //server-side err
    else{
      clientErrOutput = 'Server error. Please try your request again later.';
    }
    return throwError(clientErrOutput);
  }

  getJediByUrl(url: string): Observable<any>{
    return this.http.get(url)
      .pipe(
        retry(3),
        catchError(this.handleError),
      )
  }

  constructor(private http: HttpClient) { }
}
