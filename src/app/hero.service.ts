import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import {MessageService} from "./message.service";
import {Hero} from "./_models/hero";
import {HEROES} from "./_mock/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes!')
    return of(HEROES)
  }
}
