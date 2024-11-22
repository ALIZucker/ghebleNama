import {Component, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-table-item-l',
  standalone: true,
  imports: [],
  templateUrl: './table-item-l.component.html',
  styleUrl: './table-item-l.component.css'
})
export class TableItemLComponent  {


  counter: WritableSignal<number>= signal(0);
  counterM: WritableSignal<number>= signal(0);


  constructor() {
    // Set an interval to update the signal every second
    window.setInterval(() => {
      this.counter.update(value => value + 1);
      if (this.counter()==59){
        this.counter.set(0)
        this.counterM.update(value => value + 1)

      }


    }, 1000); // Update every 1000ms (1 second)
  }



}
