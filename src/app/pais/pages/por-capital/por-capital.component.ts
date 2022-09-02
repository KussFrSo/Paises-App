import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }


  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino ).subscribe( pais => {
      this.paises = pais
    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias( termino: string ){
    this.hayError = false;
  }

}
