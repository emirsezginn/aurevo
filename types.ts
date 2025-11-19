export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Urban';
  location: string;
  image: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  label: string;
  value: string;
}
