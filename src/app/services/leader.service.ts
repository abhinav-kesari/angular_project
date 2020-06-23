import { Injectable } from '@angular/core';

import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getleaders(): Promise<Leader[]> {
    return new Promise (resolve => {
      //Simulate Server latency with 2 sec delay
      setTimeout(() => resolve(LEADERS), 2000);
    }); 
  }

  getleader(id: string): Promise<Leader> {
    return new Promise (resolve => {
      //Simulate Server latency with 2 sec delay
      setTimeout(() =>  resolve(LEADERS.filter((promo) => (promo.id === id))[0]), 2000); 
    }); 
  }

  getFeaturedleader(): Promise<Leader> {
    return new Promise (resolve => {
      //Simulate Server latency with 2 sec delay
      setTimeout(() => { (LEADERS.filter((leader) => leader.featured)[0]);}, 2000); 
  });
  
  }
} 
