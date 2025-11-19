import { Project, Service, TeamMember, Stat } from './types';
import ResidentialImg from './components/assets/Residential.avif';
import CommercialImg from './components/assets/Commercial.avif';
import InteriorImg from './components/assets/Interior.avif';
import UrbanImg from './components/assets/Urban.avif';
import Residential2Img from './components/assets/Residential2.jpg';
import Commercial2Img from './components/assets/Commercial.jpg';
import Principal1Img from './components/assets/principal1.jpg';
import Principal2Img from './components/assets/principal2.jpg';
import Principal3Img from './components/assets/principal3.jpg';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'RESIDENCE 01 // ETHER',
    category: 'Residential',
    location: 'Malibu, CA',
    image: ResidentialImg, 
    description: 'A study in transparency. This cantilevered structure of steel and glass dissolves the boundary between the inhabitant and the Pacific horizon.'
  },
  {
    id: '2',
    title: 'THE MONOLITH',
    category: 'Commercial',
    location: 'Copenhagen, DK',
    image: CommercialImg,
    description: 'Brutalist permanence meets kinetic workspace. A corporate headquarters designed to impose gravity while facilitating fluid thought.'
  },
  {
    id: '3',
    title: 'ATRIUM // VOID',
    category: 'Interior',
    location: 'SoHo, NY',
    image: InteriorImg,
    description: 'Adaptive reuse of a 19th-century textile factory. We removed the floors to create a vertical gallery of light and silence.'
  },
  {
    id: '4',
    title: 'URBAN LUNG',
    category: 'Urban',
    location: 'Singapore, SG',
    image: UrbanImg,
    description: 'A vertical garden tower acting as a biophilic respiratory system for the high-density district surrounding it.'
  },
  {
    id: '5',
    title: 'KYOTO SILENCE',
    category: 'Residential',
    location: 'Kyoto, JP',
    image: Residential2Img,
    description: 'A contemporary Machiya utilizing charred timber (Shou Sugi Ban) and raw concrete to frame moments of absolute stillness.'
  },
  {
    id: '6',
    title: 'VERTEX HUB',
    category: 'Commercial',
    location: 'Berlin, DE',
    image: Commercial2Img,
    description: 'Algorithmic facade design optimizing solar gain. A dynamic visual landmark for Berlin’s evolving tech district.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'ELENA VARIS',
    role: 'Principal',
    image: Principal1Img,
    bio: 'Elena’s philosophy sits at the intersection of brutalism and ecology, championing structures that age with dignity.'
  },
  {
    id: '2',
    name: 'MARCUS THORNE',
    role: 'Design Director',
    image: Principal3Img,
    bio: 'A pioneer in parametric architecture, Marcus engineers forms that defy conventional structural logic.'
  },
  {
    id: '3',
    name: 'SOPHIA LI',
    role: 'Interior Lead',
    image: Principal2Img,
    bio: 'Sophia curates sensory experiences, believing that light and texture are the primary materials of habitation.'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Master Planning',
    description: 'Strategic zoning and site analysis to create resilient, thriving communities.',
    iconName: 'Map'
  },
  {
    id: '2',
    title: 'Architectural Design',
    description: 'From conceptual sketches to construction administration, we sculpt the skyline.',
    iconName: 'PenTool'
  },
  {
    id: '3',
    title: 'Interior Architecture',
    description: 'Designing the void. We craft internal spatial narratives that flow seamlessly.',
    iconName: 'Layout'
  },
  {
    id: '4',
    title: 'VR Visualization',
    description: 'Immersive pre-construction realities that allow you to walk through the future.',
    iconName: 'Glasses'
  }
];

export const STATS: Stat[] = [
  { label: 'Intl. Awards', value: '42' },
  { label: 'Years Active', value: '25' },
  { label: 'Built Works', value: '140' }
];