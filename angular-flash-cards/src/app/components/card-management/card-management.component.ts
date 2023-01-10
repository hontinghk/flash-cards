import { Component, OnInit } from '@angular/core';
import { CardDataSource } from 'src/app/card-datasource';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.css']
})
export class CardManagementComponent {

  dataSource!: CardDataSource;

  constructor(private cardService: CardService) { }

}
