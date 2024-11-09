import { Routes } from '@angular/router';
import {HomePageComponent} from "../components/Pages/home-page/home-page.component";
import {ArticleAppComponent} from "../components/Pages/article-app/article-app.component";
import {ActivaiteAppComponent} from "../components/Pages/activaite-app/activaite-app.component";
import {BotHomeComponent} from "../components/Molecules/bot-home/bot-home.component";
import {ContactUsComponent} from "../components/Pages/contact-us/contact-us.component";
import {authGuard} from "../service/auth.guard";
import {LoginAppComponent} from "../components/Pages/login-app/login-app.component";

export const routes: Routes = [
  {path:'article',component:ArticleAppComponent},
  {path:'active',component:ActivaiteAppComponent,canActivate:[authGuard]},
  {path:'contact',component:ContactUsComponent},
  {path:'login',component:LoginAppComponent},
  {path:'',component:HomePageComponent}
  ];
