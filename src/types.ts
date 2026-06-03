/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string; // lucide icon name
  badge?: string;
  deliverables: string[];
  timeline: string;
  methodology: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  longDescription: string;
  image: string;
  deliverables: string[];
  objectives: string[];
  metrics: string[];
  client: string;
  year: string;
}

export interface BrandAssessment {
  currentStature: 'hidden' | 'scaling' | 'legacy';
  channels: string[];
  vision: string;
  brandName: string;
  contactEmail: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  title?: string;
}
