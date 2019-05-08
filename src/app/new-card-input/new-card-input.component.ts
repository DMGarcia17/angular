import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.sass'],
  host: {class: 'col-4'}
})
export class NewCardInputComponent implements OnInit {
  @Output() onCardAdd = new EventEmitter<string>();
  public newCard: any = {text: ''};

  constructor() { }

  ngOnInit() {
  }
}
