import { Component } from '@angular/core';
import {SliderItemsComponent} from "../../Molecules/slider-items/slider-items.component";

@Component({
  selector: 'app-slider-show',
  standalone: true,
  imports: [
    SliderItemsComponent
  ],
  templateUrl: './slider-show.component.html',
  styleUrl: './slider-show.component.css'
})
export class SliderShowComponent {

}
