/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FlavorVariant {
  name: string;
  description: string;
  tag: string;
  image: string;
}

export interface NutritionHighlight {
  label: string;
  value: string;
}

export interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  localName: string;
  category: 'Keripik' | 'Tradisional' | 'Gurih' | 'Manis' | 'Manis & Gurih' | 'Pedas';
  basePrice: number;
  packagingSizes: string[];
  variants: FlavorVariant[];
  stock: number;
  isFeatured: boolean;
  description: string;
  longDescription: string;
  ingredients: string[];
  nutritionHighlights: NutritionHighlight[];
  images: string[];
  rating: number;
  reviewsCount: number;
  weightGrams: number;
  reviews: Review[];
}

export interface LeadForm {
  name: string;
  phone: string;
  product: string;
  variant: string;
  size: string;
  quantity: number;
  notes: string;
}
