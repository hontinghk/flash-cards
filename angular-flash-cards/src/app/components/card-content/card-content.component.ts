import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  cards: Card[] = [];
  currentCard!: Card;
  currentCardIndex: number = 0;

  front: boolean = true;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    return this.cardService.getAllCards().subscribe(
      data => {
        this.cards = data;
        this.currentCard = this.cards[0];
      }
    );
  }

  flipOnClick() {
    this.front = !this.front;
  }

  backOnClick() {
    if (this.cards.length > 0) {
      this.currentCardIndex = this.currentCardIndex == 0 ? this.cards.length - 1 : this.currentCardIndex - 1;
      this.currentCard = this.cards[this.currentCardIndex];

      this.front = true;
    }
  }

  nextOnClick() {
    if (this.cards.length > 0) {
      this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
      this.currentCard = this.cards[this.currentCardIndex];

      this.front = true;
    }
  }

}
