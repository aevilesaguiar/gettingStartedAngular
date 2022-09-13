import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { IProduct } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //para alterar esse codigo para funcionar em um servidor web , basta apenas alterar a url para apontar
  //para um servidor web apropriado. E também escrever o código do lado do servidor.
  //criar essa variavel para simular um servidor web
  private productUrl='api/products/products.json'


  //angular injetará a instancia de serviço de HttpClient nesta variável
  constructor(private http: HttpClient) { }

  //o serviço de produto retorna um Observable da matriz de produtos
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

private handleError(err: HttpErrorResponse): Observable<never> {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(() => errorMessage);
}


}
