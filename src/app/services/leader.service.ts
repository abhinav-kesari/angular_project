import { Injectable } from '@angular/core';

import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getleaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getleader(id: string): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((promo) => (promo.id === id))[0]);
  }
  getFeaturedleader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
  
}
