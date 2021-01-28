import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};
interface Login {
    idLogin: number;
    nome: string;
    senha: string;
  }
  interface Filme {
    idFilme: number;
    nomeVotante: string;
    nomeFilme: string;
    idVotante: number;
}
interface Mensagem {
    idLogin: number;
    descricaoMensagem:string;
  }
@Injectable({
  providedIn: 'root'
})

export class VotacaoService {
  url = 'https://localhost:44356/api';  
  constructor(private http: HttpClient) { }
  getLogin(nome:string, senha:string): Observable<string> {
    let urlLogin = this.url + "/login" + "/"+ nome + "/"+ senha;      
    return this.http.get<string>(urlLogin);  
  }  
  getTotalVotos(): Observable<number> {
    let urlVotos = this.url + "/quantidade";      
    return this.http.get<number>(urlVotos);  
  } 
  AddVoto(filme: Filme): Observable<Filme> {
    console.log(filme);  
    let urlFilme = this.url + '/filme';    
    return this.http.post<Filme>(urlFilme, filme);  
  } 
  AddMensagem(mensagem: Mensagem): Observable<Mensagem> {
    let urlMensagem = this.url + "/mensagem";  
    return this.http.post<Mensagem>(urlMensagem, mensagem, httpOptions);  
  }  
  
}