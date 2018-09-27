import { Component, OnInit } from '@angular/core';
import { InfoColegios } from '../../interfaces/info-colegios.interface';
import { ColegiosService } from '../../services/colegios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  id:string;  
  colegios:InfoColegios = {
    nombre:"",
    direccion : "", 
    telefonos: "",
    descripcion:""
  }; 
  

  constructor( private _colegiosService : ColegiosService,
               private redi : Router,
               private route: ActivatedRoute) {

            this.route.params.subscribe(parametros =>{
              this.id = parametros['id'];
            })
   }

  ngOnInit() {
    
    if(this.id !== "nuevo"){
      this._colegiosService.obtenerColegio(this.id)
      .subscribe( colegio => {
        this.colegios = colegio
      })
    }
  }

  guardar(){
    console.log(this.colegios);

    if(this.id == "nuevo"){
      this._colegiosService.nuevoColegio(this.colegios)
      .subscribe( data =>{
        this.redi.navigate(['/nuevo-colegio', data.name])
      })
    }else{
      this._colegiosService.actualizarColegio(this.colegios, this.id)
      .subscribe( data =>{
        
      })
    }
  }
  
  limpiar(forma:NgForm){
  
    this.redi.navigate(['/nuevo-colegio', 'nuevo']);
    
    forma.reset();
    
  }

}
