// Edit this file to add your public profile details, image paths, project links, and contact URLs.
export const profile = {
  name: 'Your Name',
  photo: '', // Example: '/images/profile.jpg'
  education: '', // Example: 'Computer Engineering · Your University'
  bio: 'I enjoy combining software, AI, and robotics to solve practical problems. This portfolio is a growing record of projects I have built, teams I have learned with, and ideas I want to keep exploring.',
  skills: [
    'Agentic GraphRAG',
    'Python',
    'Neo4j',
    'React',
    'C++',
    'Arduino',
    'Robotics',
    'LiDAR SLAM',
  ],
  links: {
    github: '', // Example: 'https://github.com/your-name'
    linkedin: '', // Optional
    email: '', // Public contact email
  },
}

export const specialAward = {
  title: 'Outstanding Student Award',
  name: 'Diamond KMUTNB',
}

export const projects = [
  {
    title: 'Agentic GraphRAG Architecture',
    area: 'AI & research',
    art: 'graph',
    theme: 'lilac',
    image: '/images/semigraph-architecture.png',
    imageAlt: 'SemiGraph architecture showing offline indexing, an evidence-adaptive agent, and graph retrieval.',
    summary: 'An evidence-grounded system for multi-hop questions about semiconductor companies, combining ontology-guided graph retrieval with an evidence-adaptive agent.',
    contribution: 'I work on graph retrieval, evidence-adaptive agent control, provenance, and evaluation.',
    tools: ['Python', 'LangGraph', 'Neo4j'],
    links: [],
  },
  {
    title: 'Smooth Path Planning',
    area: 'Robotics',
    art: 'path',
    theme: 'mint',
    image: '',
    imageAlt: '',
    summary: 'A lightweight C++ library for smooth 2D turns and velocity profiles, designed to keep planning math separate from a robot’s main Arduino sketch.',
    contribution: 'Built reusable helpers for waypoint smoothing and simple acceleration, cruise, and deceleration profiles.',
    tools: ['C++', 'Arduino', 'PlatformIO'],
    links: [],
  },
  {
    title: 'E-Pretest',
    area: 'Education technology',
    art: 'exam',
    theme: 'peach',
    image: '',
    imageAlt: '',
    summary: 'A learning platform that generates multiple-choice questions from course PDFs, adapts difficulty, and helps learners identify knowledge gaps.',
    contribution: '',
    tools: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'LLMs'],
    links: [],
  },
  {
    title: 'LiDAR SLAM',
    area: 'Robotics',
    art: 'lidar',
    theme: 'blue',
    image: '',
    imageAlt: '',
    summary: 'Deployment and integration of an existing LiDAR SLAM system for robot use.',
    contribution: 'Deployed and integrated an existing SLAM system; I did not develop the underlying algorithm.',
    tools: ['LiDAR', 'SLAM'],
    links: [],
  },
]

export const awards = [
  { event: 'ABU Robocon', year: '2026', result: '2nd Place', teamAward: true },
  { event: 'ABU Robocon', year: '2025', result: '1st Place', teamAward: true },
  { event: 'ABU Robocon', year: '2024', result: '1st Place', teamAward: true },
  { event: 'CRU Robot', year: '2023', result: '1st Place', teamAward: true },
  { event: 'TinyML Arduino Day', year: '2023', result: '1st Place', teamAward: true },
  { event: 'CDG Hackathon', year: '2025', result: 'Special Prize', teamAward: true },
]
