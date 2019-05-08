import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
