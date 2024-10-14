import { Component } from '@angular/core';
import {HeaderSideComponent} from "../../Organisms/header-side/header-side.component";
import {SliderShowComponent} from "../../Organisms/slider-show/slider-show.component";
import {AdvertisNBComponent} from "../../Organisms/advertis-nb/advertis-nb.component";
import {StartCategoryComponent} from "../../Organisms/start-category/start-category.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderSideComponent,
    SliderShowComponent,
    AdvertisNBComponent,
    StartCategoryComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
