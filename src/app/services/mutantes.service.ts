import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Injectable()
export class MutantesService {

  mutantes:any[] = [];

  constructor(private http:HttpClient) {
    console.log("Servicio de muntantes listo para usar");
    this.cargar_mutantes();
  }

  cargar_mutantes(){
    this.http.get("assets/data/mutantes.json")
    .subscribe( (respuesta:any) => {

      console.log(respuesta)
      this.mutantes = respuesta.mutantes;
    } )
  }

}
