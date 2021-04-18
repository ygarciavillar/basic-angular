import { Component } from '@angular/core';

import { DbzService } from './../services/dbz.service';
import { Personaje } from './../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Drako',
    poder: 12000
  }

}
