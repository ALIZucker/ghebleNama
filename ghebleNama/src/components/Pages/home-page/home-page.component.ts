import { Component } from '@angular/core';
import {HeaderSideComponent} from "../../Organisms/header-side/header-side.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderSideComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
