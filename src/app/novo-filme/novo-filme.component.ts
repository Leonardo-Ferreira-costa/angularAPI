import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CriarFilme } from './criar-filme';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})


@Component({
  selector: 'app-novo-filme',
  templateUrl: './novo-filme.component.html',
  styleUrls: ['./novo-filme.component.css']
})
export class NovoFilmeComponent {

  baseUrl: string = 'https://trabalhoindividualjs.vercel.app';
  // baseUrl: string = 'http://localhost:3000';
  filmeModel:CriarFilme[] | any;
  filme = new CriarFilme();
 

  constructor(private httpClient: HttpClient) {
    
  }
 
 
  novoFilme(filme:CriarFilme = this.filmeModel) {
    console.log(this.filme);
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(this.filme);
    console.log(body)
    console.log(this.baseUrl + '/'+ this.filme.genero)
    this.httpClient.post(this.baseUrl + '/'+  this.filme.genero, body,{'headers':headers}).subscribe((res: any)=>{

      const statRes = res;
      console.log(statRes);

    })
  }



}
