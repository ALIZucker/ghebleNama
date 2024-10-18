import { Component } from '@angular/core';
import {VideoItemsComponent} from "../../Molecules/video-items/video-items.component";
import {PlayVideoComponent} from "../../Molecules/play-video/play-video.component";

@Component({
  selector: 'app-video-show',
  standalone: true,
  imports: [
    VideoItemsComponent,
    PlayVideoComponent
  ],
  templateUrl: './video-show.component.html',
  styleUrl: './video-show.component.css'
})
export class VideoShowComponent {

}
