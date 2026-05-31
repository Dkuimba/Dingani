import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="relative mt-24 border-t border-gray-800/60 bg-[#070b13] overflow-hidden py-12">
      <!-- Glow background decoration -->
      <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-primary-700/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Logo and Brand -->
        <div class="flex flex-col items-center md:items-start gap-2">
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-lg bg-gradient-to-tr from-primary-500 to-accent-400 flex items-center justify-center font-bold text-white text-sm">
              D
            </div>
            <span class="font-display font-bold text-lg tracking-tight text-white">
              Dingani<span class="text-accent-400">.</span>dev
            </span>
          </div>
          <p class="text-xs text-gray-500 max-w-[280px] text-center md:text-left">
            Crafting premium interactive digital platforms with modern architectures.
          </p>
        </div>

        <!-- Links Grid -->
        <div class="flex gap-8 text-sm">
          <a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#about" class="text-gray-400 hover:text-white transition-colors">Skills</a>
          <a href="#projects" class="text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>

        <!-- Social Icons with micro-animations -->
        <div class="flex items-center gap-4">
          <!-- GitHub -->
          <a href="https://github.com/dingani" target="_blank" rel="noopener noreferrer" 
             aria-label="GitHub Profile"
             class="h-10 w-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transform hover:-translate-y-1 transition-all duration-300"
             id="footer-github-link">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>

          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/dingani" target="_blank" rel="noopener noreferrer" 
             aria-label="LinkedIn Profile"
             class="h-10 w-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transform hover:-translate-y-1 transition-all duration-300"
             id="footer-linkedin-link">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <!-- Email -->
          <a href="mailto:dingani.dev@gmail.com" 
             aria-label="Send Email"
             class="h-10 w-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transform hover:-translate-y-1 transition-all duration-300"
             id="footer-email-link">
            <svg class="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-gray-800/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>&copy; 2026 Dingani. All rights reserved.</p>
        <p>Built with Angular & Tailwind CSS. Hosted on GitHub Pages.</p>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {}
