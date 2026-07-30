import { ServiceItem, ProjectItem, ReviewItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    iconName: 'Home',
    description: 'Create beautiful, functional spaces tailored to your lifestyle and preferences',
    fullDescription: 'Our comprehensive interior design service encompasses spatial concepts, mood boards, color palettes, material selection, and custom spatial layouts.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    features: ['Custom Spatial Concepts', 'Color & Material Selection', '3D Photorealistic Rendering', 'Sourcing & Installation']
  },
  {
    id: 'furnitures',
    title: 'Furnitures',
    iconName: 'Armchair',
    description: 'Carefully curated furniture collections designed to enhance every room with beauty and functionality.',
    fullDescription: 'Bespoke furniture curation and custom cabinetry design that perfectly aligns with your space proportions and aesthetic taste.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    features: ['Custom Millwork', 'Artisan Upholstery', 'Ergonomic Layouts', 'Curated Antique & Modern Pieces']
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    iconName: 'Sparkles',
    description: 'We design layouts that improve comfort, flow, and everyday functionality.',
    fullDescription: 'Maximize flow, natural light, and efficiency in residential or commercial layouts with precision spatial blue-printing.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    features: ['Traffic Flow Optimization', 'Zoning & Privacy Layouts', 'Acoustic & Lighting Integration', 'Building Code Compliance']
  },
  {
    id: 'renovations',
    title: 'Renovations',
    iconName: 'Hammer',
    description: 'Transform outdated spaces with expert renovation guidance and planning',
    fullDescription: 'End-to-end architectural remodeling and structural renovation management from demolition to white-glove finishing.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    features: ['Structural Modifications', 'Kitchen & Bath Remodeling', 'Electrical & Plumbing Overhaul', 'Turnkey Construction']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'INTERIOR DECORATION',
    category: 'Interior Decoration',
    description: 'Create beautiful, functional spaces tailored to your lifestyle and preferences',
    fullStory: 'A masterclass in warm minimalism featuring rich emerald and deep teal architectural archways, hand-loomed cane credenzas, custom amber wall sconces, and curated indoor botanical displays that harmonize natural textures with modern luxury.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    beforeImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600',
    location: 'Lekki Phase 1, Lagos',
    completionYear: '2025',
    client: 'Private Residence',
    sizeSqFt: 3400,
    duration: '12 Weeks',
    tags: ['Earthy Elegance', 'Custom Lighting', 'Botanical Accent', 'Teal Nook']
  },
  {
    id: 'proj-2',
    title: 'FURNITURE DESIGNS',
    category: 'Furniture Designs',
    description: 'Carefully curated furniture collections designed to enhance every room with beauty and functionality.',
    fullStory: 'Designed around an iconic charcoal wool-upholstered modular sofa with natural oak frame support. Complemented by stone low-profile coffee tables and ambient architectural floor lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1600',
    beforeImageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1600',
    location: 'Victoria Island, Lagos',
    completionYear: '2025',
    client: 'Modern Villa Owner',
    sizeSqFt: 2800,
    duration: '8 Weeks',
    tags: ['Bespoke Upholstery', 'Modular Sofa', 'Natural Oak', 'Sculptural Furniture']
  },
  {
    id: 'proj-3',
    title: 'SPACE PLANNING PROJECTS',
    category: 'Space Planning',
    description: 'We design layouts that improve comfort, flow, and everyday functionality.',
    fullStory: 'An intricate architectural spatial conversion turning a compartmentalized floorplan into an expansive open-concept lounge with bespoke recessed wall alcoves, acoustic teal paneling, and floating reading nooks.',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600',
    beforeImageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1600',
    location: 'Ikoyi Penthouse',
    completionYear: '2024',
    client: 'Executive Workspace',
    sizeSqFt: 4200,
    duration: '14 Weeks',
    tags: ['Open Concept', 'Arch Partition', 'Acoustic Comfort', 'Teal Accent']
  },
  {
    id: 'proj-4',
    title: 'HOUSE RENOVATIONS',
    category: 'House Renovations',
    description: 'Transform outdated spaces with expert renovation guidance and planning',
    fullStory: 'A complete architectural rebuild replacing traditional dark finishes with warm ambient recessed LED ceiling coves, walnut cabinetry, Italian quartz countertops, and seamless flush doors.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600',
    beforeImageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600',
    location: 'Banana Island',
    completionYear: '2024',
    client: 'Luxury Estate Owner',
    sizeSqFt: 5600,
    duration: '20 Weeks',
    tags: ['Full Remodel', 'Custom Millwork', 'Recessed Cove Lighting', 'Walnut & Marble']
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Igor Friday',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Working with LuxeSpace Interiors was an incredible experience. They transformed our dim living room into an open, warm, and elegant sanctuary that our family absolutely loves spending time in.',
    date: 'July 2025',
    projectType: 'Living Room Remodel'
  },
  {
    id: 'rev-2',
    name: 'Emily Carter',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'The custom millwork and curated upholstery provided by LuxeSpace exceeded all our expectations. Every furniture piece fits our room proportions flawlessly with exceptional build quality.',
    date: 'June 2025',
    projectType: 'Bespoke Furniture Curation'
  },
  {
    id: 'rev-3',
    name: 'Sarah Johnson',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Their spatial planning expertise made a massive difference in our penthouse renovation. The natural light flow, privacy partitioning, and custom architectural alcoves completely elevated our layout.',
    date: 'May 2025',
    projectType: 'Penthouse Space Planning'
  }
];
