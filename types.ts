export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration?: string;
}