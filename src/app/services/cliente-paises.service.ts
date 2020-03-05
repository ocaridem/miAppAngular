import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //rxjs -> reactive for JavaScript

@Injectable({
  providedIn: 'root'
})
export class ClientePaisesService {

  constructor(private http:HttpClient) {

   }

   getAll():Observable<any>{
     return this.http.get("https://restcountries.eu/rest/v2/all");
   }

   getByPais(pais:string):Observable<any>{

     return this.http.get("https://restcountries.eu/rest/v2/name/"+pais);
   };

   getNombre():string{return "pepin";}
}
