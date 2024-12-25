import { Injectable } from '@angular/core';
import { persona } from '../data/persona';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private persona = persona;
  constructor() { }

  getPersonaData() {
    return this.persona;
  }
}


