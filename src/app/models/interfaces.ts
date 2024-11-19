import { DIRECTION, SPEED } from '@app/models/enums';

export interface Skill {
  skillId: number;
  skillName: string;
}

export interface SkillCategory {
  id: number;
  direction: DIRECTION;
  speed: SPEED;
  skills: Skill[];
}

export interface Stack {
  id: number;
  show: boolean;
  image: string;
  name: string;
  stackCategory: string;
}

export interface Social {
  id: number;
  socialName: string;
  socialLink: string;
  socialIcon: string;
  socialIconLight: string;
}

export interface Career {
  id: number;
  position: string;
  company: string;
  location: string;
  time: string;
}

export interface Testimonial {
  id: number;
  companyName: string;
  companyIcon: string;
  companyBackground: string;
  testimonialName: string;
  testimonialPosition: string;
  testimonialFile: string;
  testimonialText: string;
  isHighlight: boolean;
}

export interface Blog {
  id: number;
  date: string;
  name: string;
  resume: string;
  tags: string[];
  link: string;
  isHighlight: boolean;
}
