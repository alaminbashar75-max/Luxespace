export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Interior Decoration' | 'Furniture Designs' | 'Space Planning' | 'House Renovations';
  description: string;
  fullStory: string;
  imageUrl: string;
  beforeImageUrl?: string;
  location: string;
  completionYear: string;
  client: string;
  sizeSqFt: number;
  duration: string;
  tags: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  date: string;
  projectType: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  propertyType: 'Residential' | 'Commercial' | 'Office' | 'Hospitality';
  budgetRange: string;
  notes: string;
}

export interface EstimateParams {
  roomType: 'Living Room' | 'Kitchen & Dining' | 'Master Bedroom' | 'Entire House' | 'Commercial Office';
  sqFt: number;
  finishLevel: 'Essential' | 'Premium' | 'Bespoke Luxury';
  includeFurniture: boolean;
  includeLighting: boolean;
  includeStructuralChanges: boolean;
}
