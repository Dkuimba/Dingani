import { Component, inject, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="py-24 relative overflow-hidden bg-[#070b13]">
      <!-- Background glows -->
      <div class="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-primary-600/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-accent-500/5 blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center gap-4 mb-16">
          <div class="px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-xs font-semibold uppercase tracking-wider">
            Showcase
          </div>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Featured <span class="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">Creative Creations</span>
          </h2>
          <div class="h-1 w-20 rounded bg-gradient-to-r from-primary-500 to-accent-400 mt-2"></div>
        </div>

        <!-- ================= FEATURED PROJECTS CAROUSEL ================= -->
        <div class="mb-24 relative group/carousel"
             (mouseenter)="pauseAutoplay()"
             (mouseleave)="startAutoplay()">
          
          <div class="relative overflow-hidden rounded-3xl border border-gray-800/80 bg-gray-900/40 backdrop-blur-md min-h-[480px] md:min-h-[400px] flex items-center">
            
            <!-- Slide Container -->
            @for (project of featuredProjects(); track project.id; let i = $index) {
              <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 md:p-12 transition-all duration-700 ease-in-out absolute inset-0"
                   [class.opacity-100]="activeSlideIndex() === i"
                   [class.opacity-0]="activeSlideIndex() !== i"
                   [class.pointer-events-auto]="activeSlideIndex() === i"
                   [class.pointer-events-none]="activeSlideIndex() !== i"
                   [class.translate-x-0]="activeSlideIndex() === i"
                   [style.transform]="activeSlideIndex() === i ? 'translateX(0)' : (i > activeSlideIndex() ? 'translateX(50px)' : 'translateX(-50px)')">
                
                <!-- Project Image Mockup/Visual -->
                <div class="lg:col-span-6 flex justify-center items-center relative overflow-hidden rounded-2xl group/img shadow-2xl h-[240px] lg:h-[350px]">
                  <img [src]="project.image" [alt]="project.title"
                       class="w-full h-full object-cover rounded-2xl transform group-hover/img:scale-105 transition-transform duration-700">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  
                  <!-- Accents -->
                  <div class="absolute top-4 left-4 px-3 py-1 rounded-lg border border-primary-500/20 bg-primary-950/60 backdrop-blur-md text-primary-300 text-[10px] font-bold uppercase tracking-wider font-mono">
                    {{ project.category }}
                  </div>
                </div>

                <!-- Project Context details -->
                <div class="lg:col-span-6 flex flex-col justify-center gap-6">
                  <div class="flex items-center gap-3">
                    <span class="text-xs font-mono font-bold tracking-widest text-accent-400 uppercase">Featured Craft</span>
                    <div class="h-[1px] w-12 bg-accent-500/30"></div>
                  </div>
                  
                  <h3 class="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                    {{ project.title }}
                  </h3>

                  <p class="text-gray-400 text-sm leading-relaxed">
                    {{ project.longDescription }}
                  </p>

                  <!-- Tech stack tags -->
                  <div class="flex flex-wrap gap-2">
                    @for (tech of project.techStack; track tech) {
                      <span class="px-2.5 py-1 rounded bg-[#0b0f19] border border-gray-800 text-[10px] font-semibold text-gray-300 tracking-wide">
                        {{ tech }}
                      </span>
                    }
                  </div>

                  <!-- CTAs Links -->
                  <div class="flex gap-4 pt-2">
                    <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-accent-400 to-accent-500 hover:brightness-110 shadow-md shadow-accent-500/10 transition-all">
                      <span>Live App</span>
                      <svg class="h-3.5 w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                    <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white border border-gray-800 bg-gray-900/60 hover:bg-gray-900/90 transition-all">
                      <span>Source Code</span>
                      <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            }

            <!-- Left Arrow Control -->
            <button (click)="prevSlide()"
                    class="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gray-950/60 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 shadow-md backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
                    aria-label="Previous Slide">
              <svg class="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <!-- Right Arrow Control -->
            <button (click)="nextSlide()"
                    class="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gray-950/60 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 shadow-md backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
                    aria-label="Next Slide">
              <svg class="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

          </div>

          <!-- Dot Indicators -->
          <div class="flex justify-center gap-2.5 mt-6">
            @for (project of featuredProjects(); track project.id; let i = $index) {
              <button (click)="goToSlide(i)"
                      class="h-2 rounded-full transition-all duration-300"
                      [class.w-8]="activeSlideIndex() === i"
                      [class.bg-accent-400]="activeSlideIndex() === i"
                      [class.w-2]="activeSlideIndex() !== i"
                      [class.bg-gray-800]="activeSlideIndex() !== i"
                      [aria-label]="'Go to slide ' + (i + 1)">
              </button>
            }
          </div>
        </div>

        <!-- ================= ALL PROJECTS SHOWCASE GRID ================= -->
        <div>
          <!-- Grid Header -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h3 class="font-display font-extrabold text-xl sm:text-2xl text-white tracking-wide">
              Complete Portfolio Gallery
            </h3>
            
            <!-- Category Filter Tabs -->
            <div class="flex flex-wrap gap-2.5 bg-gray-950/50 p-1.5 rounded-2xl border border-gray-800/80 max-w-max">
              @for (cat of categories; track cat) {
                <button (click)="selectedCategory.set(cat)"
                        class="px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200"
                        [class.bg-primary-500]="selectedCategory() === cat"
                        [class.text-white]="selectedCategory() === cat"
                        [class.shadow-md]="selectedCategory() === cat"
                        [class.text-gray-400]="selectedCategory() !== cat"
                        [class.hover:text-white]="selectedCategory() !== cat">
                  {{ cat }}
                </button>
              }
            </div>
          </div>

          <!-- Projects Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (project of filteredProjects(); track project.id) {
              <div class="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full group/card transition-all duration-300 transform hover:-translate-y-1">
                <!-- Thumbnail -->
                <div class="h-48 w-full overflow-hidden relative border-b border-gray-800/60">
                  <img [src]="project.image" [alt]="project.title"
                       class="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-[#070b13]/60 via-transparent to-transparent opacity-80"></div>
                  
                  <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-md border border-gray-700 bg-gray-900/90 text-gray-300 text-[9px] font-bold uppercase tracking-wider font-mono">
                    {{ project.category }}
                  </span>
                </div>

                <!-- Content -->
                <div class="p-6 flex flex-col justify-between flex-grow gap-5">
                  <div class="space-y-3">
                    <h4 class="font-display font-bold text-base text-white tracking-wide line-clamp-1 group-hover/card:text-accent-400 transition-colors">
                      {{ project.title }}
                    </h4>
                    <p class="text-gray-400 text-xs leading-relaxed line-clamp-3">
                      {{ project.shortDescription }}
                    </p>
                  </div>

                  <!-- Footer Details -->
                  <div class="space-y-4">
                    <!-- Tech tags -->
                    <div class="flex flex-wrap gap-1.5">
                      @for (tech of project.techStack; track tech) {
                        <span class="px-2 py-0.5 rounded bg-gray-950 text-[9px] font-semibold text-gray-400 tracking-wide">
                          {{ tech }}
                        </span>
                      }
                    </div>

                    <!-- Links -->
                    <div class="flex justify-between items-center border-t border-gray-800/40 pt-4">
                      <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer"
                         class="inline-flex items-center gap-1.5 text-[10px] font-bold text-accent-400 hover:text-accent-300 uppercase tracking-wider">
                        <span>Launch App</span>
                        <svg class="h-3 w-3 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                      <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer"
                         class="inline-flex items-center gap-1.5 text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-wider">
                        <span>Repository</span>
                        <svg class="h-3 w-3 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private readonly portfolioService = inject(PortfolioService);

  readonly categories = ['All', 'Frontend', 'Full Stack', 'Mobile'];
  selectedCategory = signal<string>('All');
  activeSlideIndex = signal(0);
  
  private autoplayInterval: any = null;

  // Reactively fetch featured projects
  featuredProjects = computed(() => this.portfolioService.getFeaturedProjects());

  // Reactively filter all projects based on selected tab
  filteredProjects = computed(() => {
    const list = this.portfolioService.projects();
    const category = this.selectedCategory();
    if (category === 'All') return list;
    return list.filter(p => p.category === category);
  });

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.pauseAutoplay();
  }

  startAutoplay() {
    if (this.autoplayInterval) return;
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Shift slides every 5s
  }

  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  nextSlide() {
    const totalSlides = this.featuredProjects().length;
    if (totalSlides > 0) {
      this.activeSlideIndex.update(current => (current + 1) % totalSlides);
    }
  }

  prevSlide() {
    const totalSlides = this.featuredProjects().length;
    if (totalSlides > 0) {
      this.activeSlideIndex.update(current => (current - 1 + totalSlides) % totalSlides);
    }
  }

  goToSlide(index: number) {
    this.activeSlideIndex.set(index);
  }
}
