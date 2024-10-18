import { Component } from '@angular/core';
import {PlayVideoComponent} from "../play-video/play-video.component";

@Component({
  selector: 'app-video-items',
  standalone: true,
  imports: [
    PlayVideoComponent
  ],
  templateUrl: './video-items.component.html',
  styleUrl: './video-items.component.css'
})
export class VideoItemsComponent {

}
