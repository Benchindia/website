import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-event-section',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './event-section.component.html',
  styleUrls: ['./event-section.component.scss']
})
export class EventSectionComponent {
  objective: boolean = true;
  criteria: boolean = false;
  weOffer: boolean = false;
  weExpect: boolean = false;

  itemClick(event: any, value: any) {
    if (event) {
      switch (value) {
        case 'Obj':
          this.objective = true;
          this.criteria = false;
          this.weOffer = false;
          this.weExpect = false;
          break;
        case 'Cri':
          this.objective = false;
          this.criteria = true;
          this.weOffer = false;
          this.weExpect = false;
          break;
        case 'Offer':
          this.objective = false;
          this.criteria = false;
          this.weOffer = true;
          this.weExpect = false;
          break;
        case 'Expect':
          this.objective = false;
          this.criteria = false;
          this.weOffer = false;
          this.weExpect = true;
          break;
      }
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    center: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }
}
