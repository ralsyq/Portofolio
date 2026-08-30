import shotcutIcon from '@/assets/project-image/shotcut/icon.png';
import fastwareIcon from '@/assets/project-image/fastware/icon.png';
import stroomIcon from '@/assets/project-image/stroom/stroomicon.png';
import shotcutMockup from '@/assets/project-image/shotcut/mockup.png';
import fastwareMockup from '@/assets/project-image/fastware/mockup.jpeg';
import stroomMockup from '@/assets/project-image/stroom/mockup.png';

import kakyuhMockup from '@/assets/project-image/portfolio/kakyuh.png';
import kakyuhLogo from '@/assets/project-image/portfolio/kakyuh-logo.png';
import boxboxMockup from '@/assets/project-image/portfolio/boxbox.png';
import boxboxLogo from '@/assets/project-image/portfolio/boxbox-logo.png';
import pklMockup from '@/assets/project-image/portfolio/pkl-sejahtera.png';
import pklLogo from '@/assets/project-image/portfolio/pkl-logo.png';
import inspowallMockup from '@/assets/project-image/portfolio/inspowall.png';
import inspowallLogo from '@/assets/project-image/portfolio/inspowall-logo.png';
import olistMockup from '@/assets/project-image/portfolio/olist.png';
import olistLogo from '@/assets/project-image/portfolio/olist-logo.png';

export const projects = [
  {
    id: 'stroom',
    slug: 'stroom',
    category: 'iOS Apps',
    title: 'STROOM',
    tagline: '3D AR to Learn Electricity Through Interactive Lamp Circuits',
    description: [
      'Built at Apple Developer Academy Indonesia: Immersive 3D Augmented Reality iOS application that helps beginner robotics students visualize electricity flow and master lamp circuit assembly',
      'Engineered with Swift, SwiftUI, ARKit, and RealityKit featuring real-time circuit simulation, tactile breadboard placement, dynamic raytraced shadows, and interactive vehicle lamp testing',
    ],
    frameworks: ['Swift', 'SwiftUI', 'ARKit', 'RealityKit', 'Reality Composer'],
    hasArticle: true,
    articleSlug: 'stroom',
    url: 'https://github.com/spacesdrive',
    demoUrl: '#stroom',
    previewBadge: 'iOS App • Case Study ↗',
    previewTeaser: 'Visualize invisible electrical currents in 3D AR and master interactive lamp circuits in real time.',
    logo: stroomIcon,
    previewImage: stroomMockup,
  },
  {
    id: 'shotcut',
    slug: 'shotcut',
    category: 'iOS Apps',
    title: 'ShotCut',
    tagline: 'Automated Shot-List Reference Extractor for Cinematographers',
    description: [
      'Built at Apple Developer Academy Indonesia: iOS application that eliminates manual video scrubbing by automatically detecting and categorizing shot frames into an actionable reference grid',
      'Engineered with Apple Vision Framework for frame change detection and AVFoundation for high-throughput image extraction with sensitivity thresholding',
    ],
    frameworks: ['Swift', 'SwiftUI', 'Apple Vision', 'AVFoundation'],
    hasArticle: true,
    articleSlug: 'shotcut',
    url: 'https://github.com/spacesdrive',
    demoUrl: '#shotcut',
    previewBadge: 'iOS App • Case Study ↗',
    previewTeaser: 'Converts video footage into structured shot-list reference grids in <10s using Apple Vision.',
    logo: shotcutIcon,
    previewImage: shotcutMockup,
  },
  {
    id: 'urbique',
    slug: 'urbique',
    category: 'iOS Apps',
    title: 'FastWear',
    tagline: 'Your AI Stylist from Your Own Wardrobe',
    description: [
      'Built at Apple Developer Academy Indonesia: iOS application that eliminates morning outfit decision fatigue through automated clothing extraction and intelligent mix-and-match recommendations',
      'Engineered with Swift, SwiftUI, VisionKit, and CoreML for on-device wardrobe segmentation, HIG compliant tactile interactions, and style curation',
    ],
    frameworks: ['Swift', 'SwiftUI', 'CoreML', 'VisionKit', 'Apple HIG'],
    hasArticle: true,
    articleSlug: 'urbique',
    url: 'https://github.com/spacesdrive',
    demoUrl: '#urbique',
    previewBadge: 'iOS App • Case Study ↗',
    previewTeaser: 'Mix-and-match AI styling from your own wardrobe in seconds, eliminating morning decision fatigue.',
    logo: fastwareIcon,
    previewImage: fastwareMockup,
  },
  {
    id: 'kakyuh',
    slug: 'kakyuh',
    category: 'iOS Apps',
    title: 'KakYuh',
    tagline: 'Fast-Paced Bike Rental Mobile Application',
    description: [
      'Built in a 1-week sprint: Mobile bike rental application designed and delivered under tight deadlines, featuring user authentication and seamless rental transactions',
      'Led app flow coordination, team leadership, and database integration with Firebase; achieved a perfect evaluation score for functional prototype delivery',
    ],
    frameworks: ['Mobile App', 'Firebase', 'Team Lead', 'App Flow'],
    hasArticle: true,
    articleSlug: 'kakyuh',
    url: 'https://github.com/spacesdrive',
    demoUrl: '#kakyuh',
    logo: kakyuhLogo,
    previewImage: kakyuhMockup,
    previewBadge: 'Mobile App • Case Study ↗',
    previewTeaser: 'Rapid 1-week bike rental mobile prototype with Firebase backend and user auth.',
  },
  {
    id: 'boxbox',
    slug: 'boxbox',
    category: 'UI/UX Prototype',
    title: 'BoxBox',
    tagline: 'UI/UX Design for Self-Storage Space Rental App',
    description: [
      '24-Hour Rapid Design Challenge at Binus University: Designed an intuitive storage rental mobile experience under strict 1-day deadline constraints',
      'Created comprehensive task flows, user journeys, paper wireframes, and high-fidelity Figma prototypes with calm color palettes and prioritized clarity',
    ],
    frameworks: ['Figma', 'UI/UX Design', 'User Journey', 'Wireframing'],
    hasArticle: true,
    articleSlug: 'boxbox',
    url: 'https://figma.com',
    demoUrl: '#boxbox',
    logo: boxboxLogo,
    previewImage: boxboxMockup,
    previewBadge: 'UI/UX Prototype • Case Study ↗',
    previewTeaser: 'Intuitive storage booking mobile app interface designed in a 24-hour sprint.',
  },
  {
    id: 'pkl-sejahtera',
    slug: 'pkl-sejahtera',
    category: 'UI/UX Prototype',
    title: 'PKL Sejahtera',
    tagline: 'UI Design for Social Sidewalk Vendor Organization',
    description: [
      'Cross-Disciplinary Collaboration: Partnered with Psychology students to conceptualize a digital intervention organizing street vendors on Bekasi Station sidewalks',
      'Interpreted psychological intervention concepts into structured, user-friendly mobile features, user flows, wireframes, and intuitive high-fidelity Figma prototypes',
    ],
    frameworks: ['Figma', 'User Research', 'Social Impact', 'High-Fidelity'],
    hasArticle: true,
    articleSlug: 'pkl-sejahtera',
    url: 'https://figma.com',
    demoUrl: '#pkl-sejahtera',
    logo: pklLogo,
    previewImage: pklMockup,
    previewBadge: 'UI/UX Prototype • Case Study ↗',
    previewTeaser: 'Cross-disciplinary UI design organizing sidewalk street vendors at Bekasi Station.',
  },
  {
    id: 'inspowall',
    slug: 'inspowall',
    category: 'Web Apps',
    title: 'InspoWall',
    tagline: 'A Quick Daily Motivational & Uplifting Website',
    description: [
      'Personal empowerment project born from academic burnout, delivering curated daily motivational quotes and positive routines to uplift students and creators',
      'Developed with Vite and Vanilla JavaScript, emphasizing instant load performance, emotional resonance, and clean minimalist user experience',
    ],
    frameworks: ['Vite', 'JavaScript', 'HTML5', 'CSS3', 'Front End'],
    hasArticle: true,
    articleSlug: 'inspowall',
    url: 'https://github.com/spacesdrive',
    demoUrl: '#inspowall',
    logo: inspowallLogo,
    previewImage: inspowallMockup,
    previewBadge: 'Web App • Case Study ↗',
    previewTeaser: 'Minimalist daily motivational website built with Vite and Vanilla JavaScript.',
  },
  {
    id: 'olist',
    slug: 'olist',
    category: 'Data Analysis',
    title: 'Olist Analytical Dashboard',
    tagline: 'Executive E-Commerce Performance & Logistics Analytics',
    description: [
      'Interactive business intelligence dashboard built in Tableau analyzing Brazilian e-commerce metrics: revenue trends, regional shipping delays, and review distributions',
      'Implemented advanced data modeling with calculated fields, multi-table joins, dynamic parameters, set analysis, filters, box-and-whisker plots, histograms, and band charts',
    ],
    frameworks: ['Tableau', 'Data Visualization', 'Business Intelligence', 'Calculated Fields'],
    hasArticle: true,
    articleSlug: 'olist',
    url: 'https://public.tableau.com',
    demoUrl: '#olist',
    logo: olistLogo,
    previewImage: olistMockup,
    previewBadge: 'Data Analysis • Case Study ↗',
    previewTeaser: 'Tableau executive dashboard tracking revenue, logistics, and delivery delays.',
  },
];
