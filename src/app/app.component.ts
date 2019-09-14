import { Component, OnInit, } from '@angular/core';
import { PokeApiService } from './services/poke-api.service';
import { Pokemon } from "./models/pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokeApp';
  public  pokemon: Pokemon[];
  public  capturePoke: any = [];
  public  idPath: any = [];
  public imagePath: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(private poke: PokeApiService ){}

  ngOnInit() {
    this.poke.getPokemons().subscribe(res => {
      this.pokemon = res.results
    }) 
  }

  capturePokemon(p: any ){
      this.idPath.push(p.url.split('pokemon/').pop().split("/")[0]) 
      this.capturePoke.push(p);
  }
}
