import { Component } from "@angular/core";
import { Router } from "@angular/router";
interface Mensagem {
  idLogin: number;
  mensagem:string;
}
@Component({
    templateUrl: './finalizar.component.html'
  })
  export class FinalizarComponent {
    filmeMaisVotado:string = '';
    constructor(private router:Router) {}
    finalizar(){}
    Cancelar(){
      this.router.navigate(['/votar']);
    }
  }