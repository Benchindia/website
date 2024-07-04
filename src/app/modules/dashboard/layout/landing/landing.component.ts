import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../../about-us/about-us.component';
import { EventSectionComponent } from '../../event-section/event-section.component';
import { ContactUsComponent } from '../../contact-us/contact-us.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HomeComponent, AboutUsComponent, EventSectionComponent, ContactUsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    // Implement your scrolling logic here
    // For example:
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false; // Close menu after clicking
  }
}