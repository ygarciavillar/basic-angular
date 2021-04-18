import { Injectable } from "@angular/core";

import { Personaje } from './../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 15000 },
        { nombre: 'Vgeta', poder: 7500 }
    ]

    get personajes(): Personaje[] {
        return [...this._personajes]
    }
    constructor() { }



    agregarPersonaje(newPersonaje: Personaje): void {
        this._personajes.push(newPersonaje)
    }
}