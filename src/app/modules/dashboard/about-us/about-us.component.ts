import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
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

}
