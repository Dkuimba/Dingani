import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-mesh-glow">
      <!-- Decorative floating geometric mesh bubbles -->
      <div class="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-primary-600/10 blur-[80px] animate-float pointer-events-none"></div>
      <div class="absolute bottom-[10%] right-[15%] w-96 h-96 rounded-full bg-accent-500/5 blur-[100px] animate-float-slow pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text details -->
        <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-xs font-semibold uppercase tracking-wider">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for Freelance & Contract
          </div>

          <h1 class="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight">
            Hi, I'm <span class="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-300 bg-clip-text text-transparent">Dingani</span>
          </h1>

          <div class="h-12 flex items-center justify-center lg:justify-start font-display font-medium text-lg sm:text-2xl text-gray-300">
            <span>Specialized in &nbsp;</span>
            <span class="text-accent-400 border-r-2 border-accent-400 pr-1 animate-pulse">
              {{ typedText() }}
            </span>
          </div>

          <p class="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            I architect and engineer premium digital systems using state-of-the-art technologies. 
            Focused on highly interactive frontend architectures, robust backend logic, and breathtaking design aesthetics.
          </p>

          <!-- Buttons CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <a href="#projects"
               class="px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-accent-400 to-accent-500 hover:brightness-110 shadow-lg shadow-accent-500/10 hover:shadow-accent-500/30 text-center transform hover:-translate-y-0.5 transition-all">
              View Work
            </a>
            <a href="#contact"
               class="px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white border border-gray-700 bg-gray-900/60 hover:bg-gray-900/90 text-center glass-panel transform hover:-translate-y-0.5 transition-all">
              Get in Touch
            </a>
          </div>

          <!-- Social Quicklinks -->
          <div class="flex items-center gap-6 pt-4 text-gray-500 text-xs">
            <span class="uppercase tracking-widest font-semibold text-gray-600">Connect:</span>
            <div class="flex gap-4">
              <a href="https://github.com/dingani" target="_blank" rel="noopener noreferrer" 
                 class="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-1.5"
                 id="hero-github-link">
                GitHub
              </a>
              <span class="text-gray-800">/</span>
              <a href="https://linkedin.com/in/dingani" target="_blank" rel="noopener noreferrer" 
                 class="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-1.5"
                 id="hero-linkedin-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <!-- Visual element -->
        <div class="lg:col-span-5 flex justify-center items-center relative">
          <!-- Outer glowing circle -->
          <div class="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-primary-600/20 to-accent-400/20 animate-pulse pointer-events-none blur-[40px]"></div>

          <!-- Frame -->
          <div class="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-2xl bg-gradient-to-br from-primary-500/30 to-accent-400/30 p-[1px] shadow-2xl shadow-primary-500/10">
            <div class="w-full h-full rounded-2xl bg-[#0e1424]/95 flex flex-col justify-center items-center overflow-hidden relative group">
              <!-- Overlay grid lines -->
              <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>

              <!-- Animated Mock Code Lines Inside Frame -->
              <div class="w-full px-6 text-left font-mono text-[10px] sm:text-xs text-gray-400 overflow-y-auto select-none py-6 space-y-2">
                <p class="text-primary-400 font-semibold">&lt;developer&gt;</p>
                <p class="pl-4"><span class="text-accent-400">const</span> skills = [</p>
                <p class="pl-8 text-violet-300">'Angular', 'TypeScript',</p>
                <p class="pl-8 text-violet-300">'TailwindCSS', 'RxJS'</p>
                <p class="pl-4">];</p>
                <p class="pl-4"><span class="text-accent-400">const</span> mission = <span class="text-green-400">"Wow the user"</span>;</p>
                <p class="pl-4"><span class="text-accent-400">function</span> createMagic() &#123;</p>
                <p class="pl-8 text-primary-300">return skills.map(build);</p>
                <p class="pl-4">&#125;</p>
                <p class="text-primary-400 font-semibold">&lt;/developer&gt;</p>
              </div>

              <!-- Glow border effect on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
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
export class HeroComponent implements OnInit, OnDestroy {
  typedText = signal('');
  private currentPhraseIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private timerId: any = null;

  private readonly phrases = [
    'Angular Architecture',
    'Tailwind CSS v4 Styling',
    'Interactive Animations',
    'Realtime Web Applications',
    'Responsive User Interfaces'
  ];

  ngOnInit() {
    this.tick();
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  private tick() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    
    if (this.isDeleting) {
      // Deleting letters
      this.typedText.set(currentPhrase.substring(0, this.currentCharIndex - 1));
      this.currentCharIndex--;
    } else {
      // Adding letters
      this.typedText.set(currentPhrase.substring(0, this.currentCharIndex + 1));
      this.currentCharIndex++;
    }

    let delay = 100; // Normal typing delay

    if (this.isDeleting) {
      delay = 50; // Deleting is faster
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      // Completed typing the phrase
      delay = 2000; // Wait 2s before starting to delete
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      // Finished deleting
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      delay = 500; // Pause 0.5s before typing next phrase
    }

    this.timerId = setTimeout(() => this.tick(), delay);
  }
}
