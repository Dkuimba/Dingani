export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: 'Frontend' | 'Full Stack' | 'Mobile' | 'UI/UX';
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0 to 100 percentage
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}
