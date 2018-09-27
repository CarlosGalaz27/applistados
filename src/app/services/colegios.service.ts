import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { InfoColegios } from '../interfaces/info-colegios.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  colegioURL = "https://colegios-e051e.firebaseio.com/ListaColegio.json";
  actualizaURL = "https://colegios-e051e.firebaseio.com/ListaColegio/";

  constructor(private http:Http) { }

  nuevoColegio(colegios:InfoColegios){
    let body = JSON.stringify(colegios);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.post(this.colegioURL, body, {headers})
      .pipe(map(res =>{
        //console.log(res.json());
        return res.json();
      })
    )
  }

  actualizarColegio(colegios:InfoColegios, key$:string){
    let body = JSON.stringify(colegios);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

      let url = `${this.actualizaURL}/${key$}.json`;

    return this.http.put(url, body, {headers})
      .pipe(map(res =>{
        //console.log(res.json());
        return res.json();
      })
    )
  }

  obtenerColegio(key$:string){

    let url = `${this.actualizaURL}/${key$}.json`;

    return this.http.get(url)
    .pipe(map(resp => resp.json() 
    ))
  }

  obtenerColegios(){

    return this.http.get(this.colegioURL)
    .pipe(map(resp => 
      resp.json() 
   ))
  }

  borrarColegio(key$:string){
    let url = `${this.actualizaURL}/${key$}.json`;

    return this.http.delete(url)
    .pipe(map(rep => rep.json()
       ))
  }

 
  
}
