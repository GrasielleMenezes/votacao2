import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { VotacaoService } from '../Votacao.service';
interface Filme {
    idFilme: number;
    nomeVotante: string;
    nomeFilme: string;
    idVotante: number;
}
@Component({
    templateUrl: './votar.component.html',
    providers: [NgbCarouselConfig]
})
export class VotarComponent implements OnInit {
    title = 'Minha-Votacao';
    filmeVotado: Filme = {
        idFilme: 0,
        nomeVotante: '',
        nomeFilme: '',
        idVotante: 0
    };
    closeResult: string = '';
    modalOptions: NgbModalOptions | undefined;
    nomeVotante: string = '';
    idVotante: number = 0;
    constructor(config: NgbCarouselConfig, private modalService: NgbModal, private router: Router, private service: VotacaoService) {
        // 
        config.interval = 2000;
        config.keyboard = true;
        config.pauseOnHover = true;
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        }
    }
    ngOnInit() {
    }
    open(content: any) {
        this.modalService.open(content, this.modalOptions).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    cancelar() {
        this.filmeVotado = {
            idFilme: 0,
            nomeVotante: '',
            nomeFilme: '',
            idVotante: 0
        };
    }
    votar() {
        this.router.navigate(['/finalizar']);
    }
    pegarFime(numero: number) {
        debugger
        let nomeFilme = '';
        switch (numero) {
            case 1: {
                nomeFilme = 'A grande muralha'
                break;
            }
            case 2: {
                nomeFilme = 'Venom'
                break;
            }
            case 3: {
                nomeFilme = 'A menina que roubava livros'
                break;
            }
            case 4: {
                nomeFilme = 'Inferno'
                break;
            }
            case 5: {
                nomeFilme = 'Residente Evil'
                break;
            }
        }
        this.filmeVotado = {
            idFilme: numero,
            nomeVotante: this.nomeVotante,
            idVotante: this.idVotante,
            nomeFilme: nomeFilme
        };
        let filme: Filme = {
            idFilme: numero,
            //this.getRandomInt(1,1000),
            nomeVotante: this.nomeVotante,
            idVotante: this.idVotante,
            nomeFilme: nomeFilme

        }
        var retorno: Filme;
        // this.service.AddProduto(produto).subscribe(
        //     users => {retorno.nomeProduto = users.nomeProduto;alert("Venda efetuada com sucesso"); console.log(retorno.nomeProduto)}, 
        //     error => {alert("Erro na venda!");console.log(error)}
        // );

    }
    getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}