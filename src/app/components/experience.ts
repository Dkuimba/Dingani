import { Component, inject, signal, computed } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="py-24 relative overflow-hidden bg-[#0c101d]">
      <!-- Background glows -->
      <div class="absolute bottom-[20%] left-[5%] w-72 h-72 rounded-full bg-primary-600/5 blur-[80px] pointer-events-none"></div>

      <div class="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center gap-4 mb-16">
          <div class="px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-xs font-semibold uppercase tracking-wider">
            Chronology
          </div>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Journey & <span class="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <div class="h-1 w-20 rounded bg-gradient-to-r from-primary-500 to-accent-400 mt-2"></div>
        </div>

        <!-- Timeline Filters -->
        <div class="flex justify-center gap-4 mb-16">
          <button (click)="filter.set('all')"
                  class="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 border"
                  [class.bg-gradient-to-r]="filter() === 'all'"
                  [class.from-primary-500]="filter() === 'all'"
                  [class.to-primary-600]="filter() === 'all'"
                  [class.text-white]="filter() === 'all'"
                  [class.border-primary-500]="filter() === 'all'"
                  [class.text-gray-400]="filter() !== 'all'"
                  [class.border-gray-800]="filter() !== 'all'"
                  [class.bg-gray-900/40]="filter() !== 'all'">
            All
          </button>
          <button (click)="filter.set('work')"
                  class="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 border"
                  [class.bg-gradient-to-r]="filter() === 'work'"
                  [class.from-primary-500]="filter() === 'work'"
                  [class.to-primary-600]="filter() === 'work'"
                  [class.text-white]="filter() === 'work'"
                  [class.border-primary-500]="filter() === 'work'"
                  [class.text-gray-400]="filter() !== 'work'"
                  [class.border-gray-800]="filter() !== 'work'"
                  [class.bg-gray-900/40]="filter() !== 'work'">
            Work
          </button>
          <button (click)="filter.set('education')"
                  class="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 border"
                  [class.bg-gradient-to-r]="filter() === 'education'"
                  [class.from-primary-500]="filter() === 'education'"
                  [class.to-primary-600]="filter() === 'education'"
                  [class.text-white]="filter() === 'education'"
                  [class.border-primary-500]="filter() === 'education'"
                  [class.text-gray-400]="filter() !== 'education'"
                  [class.border-gray-800]="filter() !== 'education'"
                  [class.bg-gray-900/40]="filter() !== 'education'">
            Education
          </button>
        </div>

        <!-- Timeline Tracks -->
        <div class="relative border-l border-gray-800/80 ml-4 md:ml-32 space-y-12">
          @for (item of filteredTimelineItems(); track item.role) {
            <div class="timeline-item relative pl-8 md:pl-12 group">
              <!-- Sidebar Year tag (hidden on mobile, floats left on desktop) -->
              <span class="hidden md:block absolute -left-32 top-0 text-right w-24 font-mono font-bold text-xs tracking-wider text-gray-500 group-hover:text-primary-400 transition-colors">
                {{ item.year }}
              </span>

              <!-- Content card -->
              <div class="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 transform transition-all duration-300 group-hover:-translate-y-0.5">
                <!-- Header block -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <!-- Mobile year tag -->
                    <span class="md:hidden inline-block px-2.5 py-0.5 rounded bg-gray-900 border border-gray-800 text-[10px] font-mono font-bold text-primary-400 tracking-wider mb-2">
                      {{ item.year }}
                    </span>
                    <h3 class="font-display font-extrabold text-lg text-white tracking-wide">
                      {{ item.role }}
                    </h3>
                    <p class="text-sm font-semibold text-accent-400 tracking-wide mt-1">
                      {{ item.company }}
                    </p>
                  </div>

                  <span class="self-start sm:self-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        [class.bg-primary-950/40]="item.type === 'work'"
                        [class.text-primary-300]="item.type === 'work'"
                        [class.border]="item.type === 'work'"
                        [class.border-primary-500/20]="item.type === 'work'"
                        [class.bg-accent-950/40]="item.type === 'education'"
                        [class.text-accent-300]="item.type === 'education'"
                        [class.border]="item.type === 'education'"
                        [class.border-accent-500/20]="item.type === 'education'">
                    {{ item.type }}
                  </span>
                </div>

                <p class="text-gray-400 text-sm leading-relaxed">
                  {{ item.description }}
                </p>
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
export class ExperienceComponent {
  private readonly portfolioService = inject(PortfolioService);
  filter = signal<'all' | 'work' | 'education'>('all');

  filteredTimelineItems = computed(() => {
    const list = this.portfolioService.timelineItems();
    const currentFilter = this.filter();
    if (currentFilter === 'all') return list;
    return list.filter(item => item.type === currentFilter);
  });
}
