import { Component } from '@angular/core';
import {HeaderSideComponent} from "../../Organisms/header-side/header-side.component";
import {SliderShowComponent} from "../../Organisms/slider-show/slider-show.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderSideComponent,
    SliderShowComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
