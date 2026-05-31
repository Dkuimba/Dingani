import { Injectable, signal } from '@angular/core';
import { Project, SkillCategory, TimelineItem } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // Signal to hold all projects
  private readonly projectsList = signal<Project[]>([
    {
      id: 'zenith-dashboard',
      title: 'Zenith E-Commerce Dashboard',
      shortDescription: 'Enterprise analytics dashboard for high-volume store operations with live charts, sales mapping, and automated reporting.',
      longDescription: 'Zenith is a premium business management dashboard designed for modern retail platforms. It connects directly to live checkout feeds to provide real-time updates on volume, inventory, user sessions, and geographic order distribution. Built with high-performance rendering engines for smooth visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      techStack: ['Angular', 'RxJS', 'Tailwind CSS', 'D3.js', 'Node.js', 'Express'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/dingani/zenith-dashboard',
      liveUrl: 'https://dingani.github.io/zenith-dashboard/',
      featured: true
    },
    {
      id: 'nova-chat',
      title: 'Nova Realtime Collaboration App',
      shortDescription: 'Ultra-fast workspace messenger featuring channels, direct messages, rich file previews, and dynamic workspace configuration.',
      longDescription: 'Nova is a modern workspace communication application that mimics high-fidelity chat apps. It features granular status monitoring, workspace administration dashboards, markdown messaging capabilities, and an adaptive audio/video call room built using webRTC layers.',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Socket.io', 'Node.js', 'Redis'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/dingani/nova-chat',
      liveUrl: 'https://dingani.github.io/nova-chat/',
      featured: true
    },
    {
      id: 'horizon-ui',
      title: 'Horizon Design System',
      shortDescription: 'Fully typed, accessible, and themeable UI library containing 40+ handcrafted components and interaction patterns.',
      longDescription: 'Horizon is a production-grade component framework optimized for brand-aligned design systems. Complete with strict compliance for screen readers, keyboard-only tab navigation loops, comprehensive storybooks, and a customizable CSS custom properties system.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      techStack: ['Angular', 'Tailwind CSS', 'HTML5', 'PostCSS', 'Storybook'],
      category: 'Frontend',
      githubUrl: 'https://github.com/dingani/horizon-ui',
      liveUrl: 'https://dingani.github.io/horizon-ui/',
      featured: true
    },
    {
      id: 'velo-fitness',
      title: 'Velo Fitness Companion',
      shortDescription: 'Mobile training app utilizing location sensors, step counting APIs, and localized calendar sync to track routines.',
      longDescription: 'Velo is a lightweight physical training application optimized for mobile viewports. It integrates with mapping SDKs to trace running routes, records heart-rate metrics via local device APIs, and uses local persistence layers to track records and set goals.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      techStack: ['Angular', 'Tailwind CSS', 'Capacitor', 'TypeScript', 'SQLite'],
      category: 'Mobile',
      githubUrl: 'https://github.com/dingani/velo-fitness',
      liveUrl: 'https://dingani.github.io/velo-fitness/',
      featured: false
    },
    {
      id: 'apex-finance',
      title: 'Apex Financial Modeler',
      shortDescription: 'Highly interactive investment suite allowing users to simulate market trends, inflation impacts, and asset distributions.',
      longDescription: 'Apex Financial Modeler provides high-fidelity financial projections using comprehensive simulation algorithms. Features dynamic custom calculators, custom-layered heatmaps, and downloadable portfolio report bundles in PDF and Excel structures.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
      techStack: ['Angular', 'NgRx', 'Tailwind CSS', 'Chart.js', 'TypeScript'],
      category: 'Frontend',
      githubUrl: 'https://github.com/dingani/apex-finance',
      liveUrl: 'https://dingani.github.io/apex-finance/',
      featured: false
    },
    {
      id: 'ecosphere-tracker',
      title: 'EcoSphere Environment Hub',
      shortDescription: 'Community-driven dashboard tracking localized air quality indicators, global carbon levels, and conservation milestones.',
      longDescription: 'EcoSphere visualizes geospatial data relating to public environmental metrics. It uses custom layers on map providers to showcase live environmental indexes, aggregates community environmental petitions, and provides clear action guides for local green groups.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      techStack: ['Angular', 'Tailwind CSS', 'RxJS', 'Leaflet', 'GeoJSON'],
      category: 'Frontend',
      githubUrl: 'https://github.com/dingani/ecosphere-tracker',
      liveUrl: 'https://dingani.github.io/ecosphere-tracker/',
      featured: false
    }
  ]);

  // Signal to hold skill categories
  private readonly skillCategoriesList = signal<SkillCategory[]>([
    {
      name: 'Frontend Architectures',
      icon: 'code-bracket',
      skills: [
        { name: 'Angular (v17/18/19/21)', icon: 'angular', level: 95 },
        { name: 'TypeScript', icon: 'typescript', level: 92 },
        { name: 'RxJS & Signals', icon: 'rxjs', level: 90 },
        { name: 'Tailwind CSS v4', icon: 'tailwind', level: 98 },
        { name: 'NgRx State Management', icon: 'ngrx', level: 85 },
        { name: 'Responsive Web Design', icon: 'responsive', level: 95 }
      ]
    },
    {
      name: 'Backend & Data Layers',
      icon: 'server',
      skills: [
        { name: 'Node.js & Express', icon: 'nodejs', level: 88 },
        { name: 'RESTful API & GraphQL', icon: 'api', level: 90 },
        { name: 'Socket.io WebSocket Server', icon: 'websocket', level: 85 },
        { name: 'MongoDB', icon: 'mongodb', level: 86 },
        { name: 'PostgreSQL', icon: 'postgres', level: 82 },
        { name: 'Redis Cache Layer', icon: 'redis', level: 75 }
      ]
    },
    {
      name: 'DevOps & Tooling',
      icon: 'wrench',
      skills: [
        { name: 'Git & Version Control', icon: 'git', level: 94 },
        { name: 'Docker Containers', icon: 'docker', level: 80 },
        { name: 'CI/CD Pipelines (Actions)', icon: 'cicd', level: 85 },
        { name: 'Vite & Webpack Builders', icon: 'bundlers', level: 88 },
        { name: 'Storybook Component Testing', icon: 'storybook', level: 82 },
        { name: 'AWS Services (S3, EC2)', icon: 'aws', level: 78 }
      ]
    }
  ]);

  // Signal for Timeline Milestones
  private readonly timelineItemsList = signal<TimelineItem[]>([
    {
      year: '2024 - PRESENT',
      role: 'Lead Frontend Engineer',
      company: 'TechFlow Solutions',
      description: 'Architecting scalable modular Angular systems, establishing custom design systems with Tailwind CSS, mentoring developers, and boosting core web vital scores across key platforms.',
      type: 'work'
    },
    {
      year: '2022 - 2024',
      role: 'Full Stack Developer',
      company: 'InnovateX Labs',
      description: 'Engineered realtime telemetry dashboards using Angular and WebSockets. Created microservices in Node.js and reduced page load times by implementing advanced lazy loading.',
      type: 'work'
    },
    {
      year: '2020 - 2022',
      role: 'Frontend Associate',
      company: 'PixelCraft Studio',
      description: 'Collaborated closely with designers to code pixel-perfect responsive user experiences. Built re-usable form libraries, integrated payment systems, and handled client product launches.',
      type: 'work'
    },
    {
      year: '2016 - 2020',
      role: 'B.S. in Computer Science',
      company: 'Global Technical University',
      description: 'Graduated with honors. Specialized in human-computer interaction, algorithm design, software architecture paradigms, and databases.',
      type: 'education'
    }
  ]);

  // Read-only getter signals
  public readonly projects = this.projectsList.asReadonly();
  public readonly skillCategories = this.skillCategoriesList.asReadonly();
  public readonly timelineItems = this.timelineItemsList.asReadonly();

  // Getter for featured projects
  public getFeaturedProjects(): Project[] {
    return this.projectsList().filter(p => p.featured);
  }
}
