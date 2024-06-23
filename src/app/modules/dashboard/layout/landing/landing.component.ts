import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent,HomeComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
