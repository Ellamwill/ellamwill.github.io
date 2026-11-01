export type Category = 'ux-ui' | 'graphic-design';
export interface Figure {
  image: string;
  alt: string;
  caption: string;
}
export type FigureTreatment = 'phones' | 'pair' | 'wide' | 'artwork';
export interface SectionBlock {
  id?: string;
  title?: string;
  paragraphs?: string[];
  figures?: Figure[];
  treatment?: FigureTreatment;
  steps?: { label: string; text: string }[];
  caption?: string;
}
export interface Section {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  figures?: Figure[];
  treatment?: FigureTreatment;
  aliases?: string[];
  blocks?: SectionBlock[];
  layout?: 'parallel' | 'triple';
}
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  kind: string;
  role: string;
  status: string;
  summary: string;
  intro: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  hero?: string;
  heroAlt?: string;
  stage: string;
  preview?: string[];
  sections: Section[];
}
