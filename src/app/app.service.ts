import {Injectable} from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { KeyValue } from '@angular/common';
//import * as myGlobal from './global';



const httpOptions: { headers; observe;responseType; } = {
 headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'
  }),
  observe: 'response',
  responseType: 'text'
};

const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');







@Injectable()

export class AppService
{

    constructor(private http:HttpClient,private myGlobal:MyGlobal)
    {

    }

    getDataforAg(reportName:string)
    {
      return this.http.get(this.myGlobal.BASIC_URL+'/api/fmsrpt/genAgCompRpt/'+reportName,{responseType: 'text'});
  
    }

    getData(reportName:string)
    {
      return this.http.get(this.myGlobal.BASIC_URL+'/api/fmsrpt/genCompRpt/'+reportName,{responseType: 'text'});
  
    }


  }




@Injectable()

export class keyValueSortService
{

    
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  reverseKeyOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  valueOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value.localeCompare(b.value);
  }
}


export class LoadFileDetails {

        tableName: string;
        loadStr: string;
        sourcefileName: string;
        tableOp:string
}

export class CommonError{

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
}


@Injectable()
export class MyGlobal {
  
  public BASIC_URL:string;
  public static LOADING:boolean;
}
