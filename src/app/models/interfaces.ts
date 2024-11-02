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
