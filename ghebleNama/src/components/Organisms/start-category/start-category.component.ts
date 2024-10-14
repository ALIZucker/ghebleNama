import { Component } from '@angular/core';
import {StartCatItemsComponent} from "../../Molecules/start-cat-items/start-cat-items.component";

@Component({
  selector: 'app-start-category',
  standalone: true,
  imports: [
    StartCatItemsComponent
  ],
  templateUrl: './start-category.component.html',
  styleUrl: './start-category.component.css'
})
export class StartCategoryComponent {

}
