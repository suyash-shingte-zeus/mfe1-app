import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-word-card-deck',
  templateUrl: './word-card-deck.component.html',
  styleUrls: ['./word-card-deck.component.scss']
})
export class WordCardDeckComponent implements OnInit {

  constructor() { }

  @Input() parentData: any;
  @Output() newItemEvent: EventEmitter<any> = new EventEmitter<any>();

  
  ngOnInit(): void {
    console.log(this.parentData)
  }

  callFromParent(data: any){
    console.log("callFromParent - ", data);
  }

  setCB(fn: Function){
    fn("Mfe1 callinggg");
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
