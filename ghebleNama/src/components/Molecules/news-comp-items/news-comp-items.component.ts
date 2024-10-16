import {Component, OnInit, Input} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";
import {RatingModule} from 'primeng/rating';
import {FormsModule} from "@angular/forms";

export interface newsDetail {
  img: string,
  alt: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-news-comp-items',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule, RatingModule, FormsModule, Button
  ],
  templateUrl: './news-comp-items.component.html',
  styleUrl: './news-comp-items.component.css'
})
export class NewsCompItemsComponent implements OnInit {
  products!: newsDetail[];
  responsiveOptions: any[] | undefined;


  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.products = [

      {
        img: "assets/img/image 2.png",
        alt: "ولایت در نهج‌البلاغه",
        title: "مواردی که باعث شد امیرالمومنین علی (ع) حکومت را بپذیرد ؟",
        description: "مسجد جامع اصفهان . ۱۴ بهمن ۱۴۰۱"
      }, {
        img: "assets/img/image 3.png",
        alt: "ولایت در نهج‌البلاغه",
        title: "مواردی که باعث شد امیرالمومنین علی (ع) حکومت را بپذیرد ؟",
        description: "مسجد جامع اصفهان . ۱۴ بهمن ۱۴۰۱"
      },{
        img: "assets/img/image 4.png",
        alt: "ولایت در نهج‌البلاغه",
        title: "مواردی که باعث شد امیرالمومنین علی (ع) حکومت را بپذیرد ؟",
        description: "مسجد جامع اصفهان . ۱۴ بهمن ۱۴۰۱"
      }, {
        img: "assets/img/image 2.png",
        alt: "ولایت در نهج‌البلاغه",
        title: "مواردی که باعث شد امیرالمومنین علی (ع) حکومت را بپذیرد ؟",
        description: "مسجد جامع اصفهان . ۱۴ بهمن ۱۴۰۱"
      }, {
        img: "assets/img/image 4.png",
        alt: "ولایت در نهج‌البلاغه",
        title: "مواردی که باعث شد امیرالمومنین علی (ع) حکومت را بپذیرد ؟",
        description: "مسجد جامع اصفهان . ۱۴ بهمن ۱۴۰۱"
      }
    ]
  }


}
