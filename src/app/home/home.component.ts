import { Component, OnInit ,Inject} from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from "../shared/leader";
import { LeaderService } from "../services/leader.service";
import { flyInOut, expand } from "../animations/app.animation";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
   // tslint:disable-next-line:use-host-property-decorator
   host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMess: string;
  promotion: Promotion;
  promotionErrMess: string;
  leader: Leader;
  leaderErrMess: string;  

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
     this.dishservice.getFeaturedDish()
         .subscribe((dish) => this.dish = dish,
          disherrmess =>  this.dishErrMess = <any>disherrmess);
     this.promotionservice.getFeaturedPromotion()
          .subscribe((promotion) => this.promotion = promotion,
          promotionerrmess => this.promotionErrMess = <any>promotionerrmess);
     this.leaderservice.getFeaturedLeader()
          .subscribe((leader) => this.leader = leader,
          leadererrmess => this.leaderErrMess = <any>leadererrmess);
     
  }
}