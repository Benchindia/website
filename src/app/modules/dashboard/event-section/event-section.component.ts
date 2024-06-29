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
  about: boolean = true;
  objective: boolean = false;
  criteria: boolean = false;

  itemClick(event: any, value: any) {
    if (event) {
      switch (value) {
        case 'Abt':
          this.about = true;
          this.objective = false;
          this.criteria = false;
          break;
        case 'Obj':
          this.about = false;
          this.objective = true;
          this.criteria = false;
          break;
        case 'Cri':
          this.about = false;
          this.objective = false;
          this.criteria = true;
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
