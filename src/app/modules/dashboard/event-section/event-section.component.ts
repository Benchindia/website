import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
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

}
