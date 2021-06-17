import { Injectable } from '@angular/core';
import { Gruppe } from 'src/app/gruppe';
import { GRUPPEN } from 'src/app/gruppenmock';
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class GruppeService {

  constructor() { }

  getGruppen(): Observable<Gruppe[]>{
    const gruppen = of(GRUPPEN);
    return gruppen;
  }

}
