import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {bannerData, bannerItems} from "../components/Pages/home-page/Data";

@Injectable({
  providedIn: 'root'
})
export class DataBoundingService {
  databanner: bannerItems[] = bannerData

  constructor() {
  }

  getFleets(): Observable<bannerItems[]> {
    return of(this.databanner)
  }
}