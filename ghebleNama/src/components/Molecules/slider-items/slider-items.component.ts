import {Component, OnInit, Signal} from '@angular/core';
import {DataBoundingService} from "../../../service/data-bounding.service";
import {Observable} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {bannerItems} from "../../Pages/home-page/Data";
import {toSignal} from "@angular/core/rxjs-interop";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-slider-items',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './slider-items.component.html',
  styleUrl: './slider-items.component.css'
})
export class SliderItemsComponent  {
  dataBnanner$!: Observable<bannerItems[]>;
  signalData?:Signal<bannerItems[]|undefined>

  constructor(private service: DataBoundingService) {
    this.dataBnanner$ = this.service.getFleets()
    this.signalData= toSignal<bannerItems[]>(this.dataBnanner$)
  }



}
