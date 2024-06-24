import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-event-section',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './event-section.component.html',
  styleUrl: './event-section.component.scss'
})
export class EventSectionComponent {

  objective: boolean = true;
  criteria: boolean = false;
  weOffer: boolean = false;
  weExpect: boolean = false;



  itemClick(event: any, value: any) {
    console.log(event)
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
    center: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      }
    }
  }
}


