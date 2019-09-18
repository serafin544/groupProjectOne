import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMON } from '../top-20-pokemon';
import {trigger, state,style,animate, transition} from '@angular/animations';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default',style({
         transform: 'rotate(0)' })),
      state('rotated', style({
         transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
  ])
  
]
})
export class PokemonComponent implements OnInit {
  selectedPokemon: Pokemon;

  pokemons = POKEMON;

  constructor() { }

  ngOnInit() {
  }

  onSelect(pokemon: Pokemon): void {
    
    this.selectedPokemon = pokemon;
  }
  state: string = 'default';

  
  rotate(){
    this.state = (this.state ===
      'default' ? 'rotated' :
      'default');
  }


  shuffle(pokemons: Pokemon[]) {
    let counter = pokemons.length;
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);

      counter--;

      const temp = pokemons[counter];
      pokemons[counter] = pokemons[index];
      pokemons[index] = temp;
    }

    return pokemons;
  }
}
