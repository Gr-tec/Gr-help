
export interface Product {
  id: string;
  name: string;
  dimensions: string;
  application: string;
  image: string;
  category: 'bloco' | 'paver' | 'lancis';
}

export interface ConstructionService {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  date: string;
  image: string;
}

export interface NewsArticle {
  title: string;
  summary: string;
  url: string;
}
