import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private SERVER="http://server.com/api/products";
  constructor(private http:HttpClient) { }

  hadleError(error:HttpErrorResponse){
    let errorMessage="Unknown error!";
    if(error.error instanceof ErrorEvent)
    {
      errorMessage=`Error:${error.error.message}`;
    }
    else{
      errorMessage=`Error Code:${error.status} \n Message:${error.message}`;
    }
  
  window.alert(errorMessage);
  return throwError(errorMessage);
  }


  public fetchData(){
    return this.http.get(this.SERVER).pipe(catchError(this.hadleError));
  }
}
