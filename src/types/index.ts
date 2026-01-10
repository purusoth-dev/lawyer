export interface PracticeArea {
  id: string;
  title: string;
  titleTamil: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Lawyer {
  id: string;
  name: string;
  designation: string;
  experience: string;
  image: string;
  specializations: string[];
  education: string[];
  achievements: string[];
  bio: string;
  languages: string[];
  email: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  caseType: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  outcome: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  testimonial: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  content?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  message: string;
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    mapEmbed: string;
  };
  hours: {
    weekdays: string;
    time: string;
    sunday: string;
  };
  languages: string[];
  stats: {
    yearsExperience: string;
  };
  whyChooseUs: {
    title: string;
    description: string;
    icon: string;
  }[];
}

