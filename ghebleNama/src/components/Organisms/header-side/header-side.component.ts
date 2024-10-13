import { Component } from '@angular/core';
import {MenuBarComponent} from "../../Molecules/menu-bar/menu-bar.component";
import {BotHomeComponent} from "../../Molecules/bot-home/bot-home.component";

@Component({
  selector: 'app-header-side',
  standalone: true,
  imports: [
    MenuBarComponent,
    BotHomeComponent
  ],
  templateUrl: './header-side.component.html',
  styleUrl: './header-side.component.css'
})
export class HeaderSideComponent {

}
