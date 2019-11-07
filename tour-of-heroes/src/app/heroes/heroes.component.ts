import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;  <-- use direct data 
  heroes: Hero[]; // <==this for service
  // selectedHero:Hero;  //THIS IS FOR KNOWING WHICH RECORD IS SELECTED

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // THIS IS FOR SELECTING RECORD
  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero;
  // }

  // FOR MOCK DATA
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // subscribe
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
