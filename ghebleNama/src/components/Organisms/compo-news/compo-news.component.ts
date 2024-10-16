import { Component } from '@angular/core';
import {NewsCompItemsComponent} from "../../Molecules/news-comp-items/news-comp-items.component";

@Component({
  selector: 'app-compo-news',
  standalone: true,
  imports: [
    NewsCompItemsComponent
  ],
  templateUrl: './compo-news.component.html',
  styleUrl: './compo-news.component.css'
})
export class CompoNewsComponent {

}
