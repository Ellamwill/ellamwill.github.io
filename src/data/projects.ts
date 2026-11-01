import type { Project } from './types';
import { uxProjects } from './ux-refinements';
import { graphicProjects } from './graphic-refinements';

export const projects: Project[] = [...uxProjects, ...graphicProjects];
export const projectUrl = (project: Project) => `/${project.category}/${project.slug}/`;
export const categoryLabel = (category: Project['category']) => category === 'ux-ui' ? 'UX/UI' : 'Graphic Design';
export const projectCount = (category?: Project['category']) => String(category ? projects.filter(project => project.category === category).length : projects.length).padStart(2, '0');
