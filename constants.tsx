
import { Product, ConstructionService, Project } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'b10',
    name: 'Bloco de 10',
    dimensions: '10x20x40cm',
    application: 'Paredes internas e divisórias leves.',
    image: 'https://images.unsplash.com/photo-1517646272486-a2c99afd9538?auto=format&fit=crop&q=80&w=800',
    category: 'bloco'
  },
  {
    id: 'b15',
    name: 'Bloco de 15',
    dimensions: '15x20x40cm',
    application: 'Paredes externas e estruturas padrão.',
    image: 'https://images.unsplash.com/photo-1590060153074-303de501e503?auto=format&fit=crop&q=80&w=800',
    category: 'bloco'
  },
  {
    id: 'b20',
    name: 'Bloco de 20',
    dimensions: '20x20x40cm',
    application: 'Muros de contenção e estruturas pesadas.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800',
    category: 'bloco'
  },
  {
    id: 'p1',
    name: 'Paver Retangular',
    dimensions: '10x20x6cm',
    application: 'Pavimentação de calçadas e pátios.',
    image: 'https://images.unsplash.com/photo-1505142446710-c3d599388611?auto=format&fit=crop&q=80&w=800',
    category: 'paver'
  },
  {
    id: 'l1',
    name: 'Lancis de Betão',
    dimensions: '100x25x15cm',
    application: 'Delimitação de vias e jardins.',
    image: 'https://images.unsplash.com/photo-1531834361935-ee12bd38086a?auto=format&fit=crop&q=80&w=800',
    category: 'lancis'
  }
];

export const SERVICES: ConstructionService[] = [
  {
    id: 's1',
    title: 'Construção de Moradias',
    description: 'Executamos o seu sonho do alicerce ao acabamento, com rigor técnico e prazos cumpridos.',
    icon: 'fa-home',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    title: 'Obras Públicas e Privadas',
    description: 'Capacidade técnica para grandes infraestruturas, edifícios comerciais e armazéns.',
    icon: 'fa-city',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    title: 'Reabilitação e Manutenção',
    description: 'Renovação completa de espaços degradados, devolvendo vida e valor ao património.',
    icon: 'fa-tools',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    title: 'Pavimentação Profissional',
    description: 'Assentamento de pavers e lancis com nivelamento perfeito e alta durabilidade.',
    icon: 'fa-road',
    image: 'https://images.unsplash.com/photo-1590486803833-ffc910ffa5c0?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Condomínio Bela Vista',
    location: 'Luanda, Angola',
    type: 'Residencial',
    date: 'Dezembro 2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Pavimentação Av. Central',
    location: 'Benguela, Angola',
    type: 'Infraestrutura',
    date: 'Março 2024',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  }
];
