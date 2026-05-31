import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
         [class.glass-panel]="isScrolled()"
         [class.py-4]="!isScrolled()"
         [class.py-3]="isScrolled()"
         [class.shadow-lg]="isScrolled()">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-2 group">
          <div class="h-9 w-9 rounded-lg bg-gradient-to-tr from-primary-500 to-accent-400 flex items-center justify-center font-bold text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform">
            D
          </div>
          <span class="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-primary-300 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            Dingani<span class="text-accent-400">.</span>dev
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          @for (item of menuItems; track item.id) {
            <a [href]="'#' + item.id"
               (click)="scrollToSection($event, item.id)"
               class="font-medium text-sm tracking-wide transition-all duration-200 hover:text-accent-400"
               [class.text-accent-400]="activeSection() === item.id"
               [class.text-gray-300]="activeSection() !== item.id"
               [class.text-glow]="activeSection() === item.id">
              {{ item.label }}
            </a>
          }
        </div>

        <!-- Social & CTAs -->
        <div class="hidden md:flex items-center gap-4">
          <a href="https://github.com/dingani" target="_blank" rel="noopener noreferrer" 
             aria-label="GitHub Profile"
             class="p-2 text-gray-400 hover:text-white transition-colors duration-200"
             id="nav-github-link">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/dingani" target="_blank" rel="noopener noreferrer" 
             aria-label="LinkedIn Profile"
             class="p-2 text-gray-400 hover:text-white transition-colors duration-200"
             id="nav-linkedin-link">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#contact"
             (click)="scrollToSection($event, 'contact')"
             class="ml-2 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-accent-400 to-accent-500 hover:brightness-110 shadow-md shadow-accent-500/10 hover:shadow-accent-500/25 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
            Let's Talk
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button (click)="toggleMobileMenu()"
                class="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
                aria-label="Toggle Menu">
          <svg class="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            @if (isMobileMenuOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div class="md:hidden transition-all duration-300 overflow-hidden"
           [style.maxHeight]="isMobileMenuOpen() ? '350px' : '0'">
        <div class="px-6 py-4 bg-[#0e1424]/95 border-t border-gray-800 flex flex-col gap-4 shadow-xl">
          @for (item of menuItems; track item.id) {
            <a [href]="'#' + item.id"
               (click)="scrollToSection($event, item.id)"
               class="font-medium text-sm tracking-wide py-1 text-gray-300 hover:text-accent-400 transition-colors"
               [class.text-accent-400]="activeSection() === item.id">
              {{ item.label }}
            </a>
          }
          <hr class="border-gray-800">
          <div class="flex items-center justify-between pt-2">
            <div class="flex gap-4">
              <a href="https://github.com/dingani" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com/in/dingani" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
            <a href="#contact"
               (click)="scrollToSection($event, 'contact')"
               class="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-accent-400 to-accent-500">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeSection = signal('home');

  readonly menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
    this.detectActiveSection();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.isMobileMenuOpen.set(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 76; // Approximate height of the nav bar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeSection.set(sectionId);
    }
  }

  private detectActiveSection() {
    const sections = this.menuItems.map(item => document.getElementById(item.id));
    const navHeight = 100;
    const scrollPosition = window.scrollY + navHeight;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && scrollPosition >= section.offsetTop) {
        this.activeSection.set(this.menuItems[i].id);
        break;
      }
    }
  }
}
