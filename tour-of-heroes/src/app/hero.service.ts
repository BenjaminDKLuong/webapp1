import { Injectable } from '@angular/core';
import { Hero } from './hero';   // THIS IS A CLASS
import { HEROES } from './mock-heroes';  // THIS IS MOCK DATA

import { Observable, of } from 'rxjs';  //THIS IS FOR CONNECTING TO A SERVER
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //TO CONNECT TO A SERVER

import { MessageService } from './message.service'; // import a service


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private heroesUrl = 'api/heroes';  // URL to web api


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // THIS IS FOR MOCK DATA
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // THIS IS FOR GETTING DATA FROM SERVER  WITH RXJS OF()
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }



  // THIS IS SERVICE IN SERVICE
  // getHeroes(): Observable<Hero[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  // Observable
  // getHero(id: number): Observable<Hero> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }


  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

}
