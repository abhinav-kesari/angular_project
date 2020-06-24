import { Injectable } from '@angular/core';
import { of,Observable } from "rxjs";
import { delay } from "rxjs/operators";

import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getleaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getleader(id: string): Observable<Leader> {
    return of(LEADERS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedleader(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  
  }
} 
