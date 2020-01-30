import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpReqService {

  handleErrors(err: HttpErrorResponse): Observable<string>{
    let clientOutput: string;
    if(err.error instanceof ErrorEvent){
      //handle client error
      clientOutput = err.error.message;
    } else{
      clientOutput = 'Server error. Please try your request again later.';
    }
    return throwError(clientOutput);
  }

  get(url: string): Observable<any>{
    return this.http.get(url)
      .pipe(
        retry(3),
        catchError(this.handleErrors)
      )

  }
  constructor(private http: HttpClient) { }
}
