import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-bot-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './bot-home.component.html',
  styleUrl: './bot-home.component.css'
})
export class BotHomeComponent {

}
