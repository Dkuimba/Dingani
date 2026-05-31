import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="py-24 relative overflow-hidden bg-mesh-glow">
      <!-- Background glows -->
      <div class="absolute top-[20%] left-[15%] w-80 h-80 rounded-full bg-primary-600/5 blur-[90px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Text info block -->
        <div class="lg:col-span-5 flex flex-col justify-center gap-6">
          <div class="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-300 text-xs font-semibold uppercase tracking-wider">
            Collaboration
          </div>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Let's create something <span class="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">extraordinary</span>
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed">
            I'm currently open to freelance opportunities, consulting, contract projects, and design systems collaboration. 
            Have a project in mind, or just want to connect? Send over a message!
          </p>

          <!-- Contact details -->
          <div class="space-y-4 pt-4">
            <div class="flex items-center gap-4 group">
              <div class="h-10 w-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-primary-400 group-hover:border-primary-500 transition-colors">
                <svg class="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <span class="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Mail</span>
                <a href="mailto:dingani.dev@gmail.com" class="text-sm font-semibold text-gray-300 hover:text-white transition-colors">dingani.dev&#64;gmail.com</a>
              </div>
            </div>

            <div class="flex items-center gap-4 group">
              <div class="h-10 w-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-primary-400 group-hover:border-primary-500 transition-colors">
                <svg class="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <span class="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Base</span>
                <span class="text-sm font-semibold text-gray-300">Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Block -->
        <div class="lg:col-span-7">
          <div class="glass-panel rounded-2xl p-8 md:p-10 shadow-xl relative">
            
            <!-- Toast notification inside form -->
            @if (showToast()) {
              <div class="absolute top-4 left-4 right-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3 animate-pulse z-20">
                <svg class="h-5 w-5 text-emerald-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div class="text-xs">
                  <span class="font-bold text-emerald-300 block">Message Sent!</span>
                  <span class="text-gray-400">Thanks for writing, I'll get back to you shortly.</span>
                </div>
              </div>
            }

            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- Name Input -->
                <div class="relative flex flex-col gap-2">
                  <label for="name" class="text-xs font-bold uppercase tracking-wider text-gray-400">Your Name</label>
                  <input type="text" id="name" formControlName="name"
                         placeholder="John Doe"
                         class="px-4 py-3.5 rounded-xl border border-gray-800 bg-[#070b13]/80 focus:border-primary-500 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors w-full">
                </div>

                <!-- Email Input -->
                <div class="relative flex flex-col gap-2">
                  <label for="email" class="text-xs font-bold uppercase tracking-wider text-gray-400">Your Email</label>
                  <input type="email" id="email" formControlName="email"
                         placeholder="john&#64;example.com"
                         class="px-4 py-3.5 rounded-xl border border-gray-800 bg-[#070b13]/80 focus:border-primary-500 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors w-full">
                </div>
              </div>

              <!-- Subject -->
              <div class="relative flex flex-col gap-2">
                <label for="subject" class="text-xs font-bold uppercase tracking-wider text-gray-400">Subject</label>
                <input type="text" id="subject" formControlName="subject"
                       placeholder="Project Collaboration"
                       class="px-4 py-3.5 rounded-xl border border-gray-800 bg-[#070b13]/80 focus:border-primary-500 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors w-full">
              </div>

              <!-- Message -->
              <div class="relative flex flex-col gap-2">
                <label for="message" class="text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
                <textarea id="message" formControlName="message" rows="5"
                          placeholder="Tell me about your amazing idea..."
                          class="px-4 py-3.5 rounded-xl border border-gray-800 bg-[#070b13]/80 focus:border-primary-500 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors w-full resize-none"></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit"
                      [disabled]="contactForm.invalid || isSubmitting()"
                      class="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-accent-400 to-accent-500 hover:brightness-110 shadow-lg shadow-accent-500/10 active:translate-y-0 transform hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                @if (isSubmitting()) {
                  <span>Transmitting...</span>
                } @else {
                  <span>Send Message</span>
                  <svg class="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                }
              </button>
            </form>
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
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  
  isSubmitting = signal(false);
  showToast = signal(false);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);

      // Simulate API submit latency
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.showToast.set(true);
        this.contactForm.reset();

        // Auto dismiss toast after 4 seconds
        setTimeout(() => {
          this.showToast.set(false);
        }, 4000);
      }, 1500);
    }
  }
}
