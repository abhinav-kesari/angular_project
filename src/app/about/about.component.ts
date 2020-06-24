import { Component, OnInit } from '@angular/core';

import { Leader } from "../shared/leader";
import { LEADERS   } from "../shared/leaders";
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  
  leaders: Leader[] = LEADERS ;
  
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.leaderservice.getleaders()
        .subscribe((leaders) => this.leaders = leaders);
    
  }


}
