import { Injectable } from '@angular/core';
import { Hero } from './hero';   // THIS IS A CLASS
import { HEROES } from './mock-heroes';  // THIS IS MOCK DATA
import { Observable, of } from 'rxjs';  //THIS IS FOR CONNECTING TO A SERVER
import { MessageService } from './message.service'; // import a service

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // THIS IS FOR MOCK DATA
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  
  // THIS IS FOR GETTING DATA FROM SERVER  WITH RXJS OF()
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  // THIS IS SERVICE IN SERVICE
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
