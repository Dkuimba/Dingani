import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar';
import { HeroComponent } from './components/hero';
import { AboutComponent } from './components/about';
import { ProjectsComponent } from './components/projects';
import { ExperienceComponent } from './components/experience';
import { ContactComponent } from './components/contact';
import { FooterComponent } from './components/footer';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
