import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Importação do HttpClient para consumo da API

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  //Inicio
 filmes: any  = []; 
 baseUrl: string = 'https://trabalhoindividualjs.vercel.app';

  constructor(private httpClient: HttpClient) {
    this.get_movies();
  }
  
    get_movies(){ 
      this.httpClient.get(this.baseUrl + '/terror').subscribe((res: any)=>{
          console.log(res);
          this.filmes = res;
      });
    }

}
