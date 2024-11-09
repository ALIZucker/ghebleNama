import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from "../components/Pages/home-page/home-page.component";
import {HeaderSideComponent} from "../components/Organisms/header-side/header-side.component";
import {FooterCompoComponent} from "../components/Organisms/footer-compo/footer-compo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, HeaderSideComponent, FooterCompoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ghebleNama';
}
