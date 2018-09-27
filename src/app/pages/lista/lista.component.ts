import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../../services/colegios.service';
import { InfoColegios } from '../../interfaces/info-colegios.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  colegios:any = [];

  constructor( private _colegios:ColegiosService) {
    this._colegios.obtenerColegios()
    .subscribe(data =>{
      console.log(data)
      this.colegios = data;
      console.log(this.colegios)
    })
   }
  
  ngOnInit() {
    
  }

  borrarColegio(key$:string){
    this._colegios.borrarColegio(key$)
    .subscribe(resp =>{
      if(resp){
        console.error(resp)
      } else {
        delete this.colegios[key$];
      }
    }
  }

}
