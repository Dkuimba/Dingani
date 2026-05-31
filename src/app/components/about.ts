import { Component, inject } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-24 relative overflow-hidden bg-[#0c101d]">
      <!-- Background elements -->
      <div class="absolute top-[30%] right-[5%] w-80 h-80 rounded-full bg-primary-600/5 blur-[90px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center gap-4 mb-16">
          <div class="px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-xs font-semibold uppercase tracking-wider">
            Technical Arsenal
          </div>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Skills & <span class="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">Core Competencies</span>
          </h2>
          <div class="h-1 w-20 rounded bg-gradient-to-r from-primary-500 to-accent-400 mt-2"></div>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (category of portfolioService.skillCategories(); track category.name; let catIndex = $index) {
            <div class="glass-panel glass-panel-hover rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <!-- Category Header -->
              <div>
                <div class="flex items-center gap-4 mb-8">
                  <div class="h-12 w-12 rounded-xl bg-primary-950/60 border border-primary-500/30 flex items-center justify-center text-primary-300 shadow-md">
                    <!-- Dynamic Lucide-like custom SVG icons based on category index -->
                    @switch (catIndex) {
                      @case (0) {
                        <!-- Code icon -->
                        <svg class="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                        </svg>
                      }
                      @case (1) {
                        <!-- Server icon -->
                        <svg class="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.25h13.5M5.25 9.75h13.5m-13.5 4.5h13.5m-13.5 4.5h13.5M3 3h18v18H3V3z"/>
                        </svg>
                      }
                      @case (2) {
                        <!-- Wrench/Tools icon -->
                        <svg class="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      }
                    }
                  </div>
                  <h3 class="font-display font-bold text-lg text-white tracking-wide">
                    {{ category.name }}
                  </h3>
                </div>

                <!-- Skill Rows -->
                <div class="space-y-5">
                  @for (skill of category.skills; track skill.name) {
                    <div class="space-y-2">
                      <div class="flex justify-between items-center text-xs tracking-wide">
                        <span class="font-medium text-gray-300">{{ skill.name }}</span>
                        <span class="font-semibold text-accent-400">{{ skill.level }}%</span>
                      </div>
                      <!-- Progress bar container -->
                      <div class="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                        <div class="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400 transition-all duration-1000 ease-out"
                             [style.width.%]="skill.level"></div>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <!-- Visual decoration footer inside card -->
              <div class="border-t border-gray-800/40 mt-8 pt-4 flex justify-between items-center text-[10px] text-gray-600 font-mono">
                <span>// LEVEL CHECK</span>
                <span>SYSTEM_OK</span>
              </div>
            </div>
          }
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
export class AboutComponent {
  protected readonly portfolioService = inject(PortfolioService);
}
