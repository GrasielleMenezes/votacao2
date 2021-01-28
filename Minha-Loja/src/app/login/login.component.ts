import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { VotacaoService } from "../Votacao.service";
interface EnviaLogin {
    nome: string;
    senha: string;
  }
  
@Component({
    templateUrl: './login.component.html'
  })
  export class LoginComponent implements OnInit {
    formularioDeUsuario!: FormGroup;
    constructor(private router:Router, private fb: FormBuilder, private servico:VotacaoService) {}
    ngOnInit(){
        this.criarFormularioDeUsuario();
    }
    logar(){
        let login = this.formularioDeUsuario.get("nome")?.value;
        let senha = this.formularioDeUsuario.get("senha")?.value;
        console.log(login, senha);
        this.servico.getLogin(login, senha).subscribe(
            res => {alert("Logado")},
            error => {alert("Erro ao logar")}
        );
    }
    criarFormularioDeUsuario() {
        this.formularioDeUsuario = this.fb.group({
            nome: [
              '',
              Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(100)
              ])
            ],
            senha: ['', Validators.compose([Validators.required])]
          });
      }
  }