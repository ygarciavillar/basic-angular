import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) { }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) { return }
    // this.onNuevoPersonaje.emit(this.nuevo) --> se utiliza con el eventEmmiter del @Output
    this.dbzService.agregarPersonaje(this.nuevo)
    this.resetPersonaje()
  }

  resetPersonaje(): void {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
