import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject;

  term: string = '';

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  search(){
    this.onEnter.emit(this.term);
  }

  keyPressed(){
    this.debouncer.next(this.term);
  }
}
