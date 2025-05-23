// src/types/skills.ts
import * as SiIcons from "react-icons/si";

export type IconKey = keyof typeof SiIcons;

export interface Skill {
  title: string;
  icon: IconKey;
  description: string;
}
