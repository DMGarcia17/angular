import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs';
import { Card } from './models/card';
import { CardService} from './card-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-app';
  public cards$: Observable<Card[]>;


  public addCard(cardText: string) {
    this.cardService.createCard(new Card(cardText));
  }

  constructor(private cardService: CardService) {
    this.cards$ = this.cardService.getCardList();
  }
}
