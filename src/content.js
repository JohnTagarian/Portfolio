// Edit this file to add your public profile details, image paths, project links, and contact URLs.
export const profile = {
  name: 'Kantinan',
  fullName: 'Kantinan Khongnuam',
  nickname: 'Pond',
  gpax: '3.96',
  photo: '/images/profile-hero.png',
  education: 'KMUTNB · College of Industrial Technology · Computer Engineering',
  bio: 'Computer Engineering Students Developing intelligent machines software from the ground up: Powered by math, built with software, driven by AI.',
  skills: [
    'Python',
    'C++',
    'RAG/GraphRAG',
    'AI/ML',
    'NLP',
    'Robotics',
    'Arduino',
    'Optimization',
  ],
  links: {
    github: 'https://github.com/JohnTagarian', // Example: 'https://github.com/your-name'
    facebook: 'https://www.facebook.com/kantinan.kongnuam',
    instagram: 'https://www.instagram.com/pond_ktn/',
    linkedin: 'https://www.linkedin.com/in/kantinan-khongnuam-6b3a542ba/',
    email: 'pondkitnag@gmail.com',
    phone: '091-764 0998',
  },
}

export const specialAward = {
  title: 'Outstanding Student Award',
  name: 'Diamond KMUTNB',
}

// Replace each GitHub href with that project's repository URL when available.
export const projects = [
  {
    title: 'Agentic GraphRAG Architecture',
    area: 'AI & research',
    art: 'graph',
    theme: 'lilac',
    image: '',
    imageAlt: '',
    summary: 'An evidence-grounded system for multi-hop questions about semiconductor companies, combining ontology-guided graph retrieval with an evidence-adaptive agent.',

    tools: ['Python', 'LangGraph', 'Neo4j'],
    links: [{ label: 'GitHub', href: "https://github.com/Semi-Graph-Project/Semi-Graph" }],
  },
  {
    title: 'Smooth Path Planning',
    area: 'Robotics',
    art: 'path',
    theme: 'mint',
    image: '',
    imageAlt: '',
    summary: 'A lightweight C++ library for smooth 2D turns and velocity profiles, designed to keep planning math separate from a robot’s main Arduino sketch.',
    tools: ['C++', 'Arduino', 'PlatformIO'],
    links: [{ label: 'GitHub', href: "https://github.com/JohnTagarian/LightweightSmoothPath2D" }],
  },
  {
    title: 'E-Pretest',
    area: 'Education technology',
    art: 'exam',
    theme: 'peach',
    image: '',
    imageAlt: '',
    summary: 'A learning platform that generates multiple-choice questions from course PDFs, adapts difficulty, and helps learners identify knowledge gaps.',
    tools: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'LLMs'],
    links: [{ label: 'GitHub', href: "https://github.com/JohnTagarian/E-Pretest" }],
  },
  {
    title: 'RealSense Floor Edge Detection',
    area: 'Robotics perception',
    art: 'lidar',
    theme: 'blue',
    image: '',
    imageAlt: '',
    summary: 'A ROS1 package that processes RealSense D435i point clouds to detect the floor’s far edge and publish line parameters for robot alignment and navigation.',
    tools: ['ROS Noetic', 'Python', 'Open3D', 'RealSense D435i'],
    links: [{ label: 'GitHub', href: 'https://github.com/iRAP-Enterprise/rs_floor_detection' }],
  },
]

// Each story has Image1.png–Image4.png ready. Image1 starts the card slideshow.
// Replace mock PNGs with any real images; update alt and caption.
// Fill role with your own contribution. See public/images/README.md for the file list.
// Use type: 'certificate' for an uncropped certificate preview.
export const teamStories = [
  {
    id: 'robocon-2026', title: 'Robocon', year: '2026', kind: 'achievement',
    summary: 'Contributed to the team’s ABU Robocon 2026 season, earning 2nd Place, with responsibility for the robot’s Software Perception and Planning systems, including 3D LiDAR-based detection and path planning using pathfinding algorithms.',
    milestones: [
      { kind: 'award', event: 'ABU Robocon 2026', result: '2nd Place' },
      { kind: 'award', event: 'TPA Robot Competition', result: 'Best Autonomous' },
    ],
    role: '',
    images: [
      { src: '/images/teams/robocon-2026/Image1.png', alt: 'Mock image 1 for Robocon 2026', caption: 'Team', type: 'photo' },
      { src: '/images/teams/robocon-2026/Image2.png', alt: 'Mock image 2 for Robocon 2026', caption: 'Robot', type: 'photo' },
      { src: '/images/teams/robocon-2026/Image3.png', alt: 'Mock image 3 for Robocon 2026', caption: 'Game', type: 'photo' },
      { src: '/images/teams/robocon-2026/Image4.png', alt: 'Mock image 4 for Robocon 2026', caption: 'Award', type: 'photo' },
    ],
  },
  {
    id: 'robocon-2025', title: 'Robocon', year: '2025', kind: 'achievement',
    summary: 'Developed a data-driven basketball shooting model using regression techniques to predict optimal shooting parameters and improve shot accuracy based on experimental data.',
    milestones: [
      { kind: 'award', event: 'TPA Robot Competition', result: '1st Place', detail: 'Thailand Championship' },
      { kind: 'award', event: 'TV5 ABU Robocon', result: '1st Place', detail: 'Thailand Championship' },
      { kind: 'representation', event: 'ABU Robocon International', result: 'Thailand Representative', detail: 'Mongolia' },
    ],
    role: '',
    images: [
      {
        src: '/images/teams/robocon-2025/Image1.png',
        alt: 'The Robocon 2025 team holding the Thailand championship award',
        caption: 'TV5 ABU Robocon Thailand Championship 2025',
        type: 'photo',
        position: '50% 25%',
      },
      { src: '/images/teams/robocon-2025/Image2.png', alt: 'Mock image 2 for Robocon 2025', caption: 'Robot', type: 'photo' },
      { src: '/images/teams/robocon-2025/Image3.png', alt: 'Mock image 3 for Robocon 2025', caption: 'Award', type: 'photo' },
      { src: '/images/teams/robocon-2025/Image4.png', alt: 'Mock image 4 for Robocon 2025', caption: 'Thailand Representative in Mongolia', type: 'photo' },
    ],
  },
  {
    id: 'cdg-2025', title: 'CDG Hackathon', year: '2025', kind: 'achievement',
    summary: 'An AI challenge focused on improving social and public services.',
    milestones: [
      { kind: 'award', event: 'CDG Hackathon 2025', result: 'Special Prize' },
    ],
    role: '',
    images: [
      { src: '/images/teams/cdg-2025/Image1.png', alt: 'Mock image 1 for CDG Hackathon 2025', caption: 'Award', type: 'photo' },
      // { src: '/images/teams/cdg-2025/Image2.png', alt: 'Mock image 2 for CDG Hackathon 2025', caption: 'Mock image 2', type: 'photo' },
      // { src: '/images/teams/cdg-2025/Image3.png', alt: 'Mock image 3 for CDG Hackathon 2025', caption: 'Mock image 3', type: 'photo' },
      // { src: '/images/teams/cdg-2025/Image4.png', alt: 'Mock image 4 for CDG Hackathon 2025', caption: 'Mock image 4', type: 'photo' },
    ],
  },
  {
    id: 'robocon-2024', title: 'Robocon', year: '2024', kind: 'achievement',
    summary: 'National competition milestones, followed by representing Thailand at ABU Robocon in Vietnam.',
    milestones: [
      { kind: 'award', event: 'TPA Robot Competition', result: '1st Place', detail: 'Thailand Championship' },
      { kind: 'award', event: 'ABU Robocon', result: '1st Place', detail: 'Thailand Championship' },
      { kind: 'representation', event: 'ABU Robocon International', result: 'Thailand Representative', detail: 'Vietnam' },
    ],
    role: '',
    images: [
      { src: '/images/teams/robocon-2024/Image1.png', alt: 'Mock image 1 for Robocon 2024', caption: 'Thailand Representative in Vietnam', type: 'photo' },
      { src: '/images/teams/robocon-2024/Image2.png', alt: 'Mock image 2 for Robocon 2024', caption: 'Robot', type: 'photo' },
      { src: '/images/teams/robocon-2024/Image3.png', alt: 'Mock image 3 for Robocon 2024', caption: 'Award', type: 'photo' },
      { src: '/images/teams/robocon-2024/Image4.png', alt: 'Mock image 4 for Robocon 2024', caption: 'Award', type: 'photo' },
    ],
  },
  {
    id: 'cru-2023', title: 'CRU Robot Games', year: '2023', kind: 'achievement',
    summary: 'The 14th CRU Robot Games, hosted by Chandrakasem Rajabhat University.',
    milestones: [
      { kind: 'award', event: 'CRU Robot Games 2023', result: '1st Place' },
    ],
    role: '',
    images: [
      { src: '/images/teams/cru-2023/Image1.png', alt: 'Mock image 1 for CRU Robot Games 2023', caption: 'Award', type: 'photo' },
      // { src: '/images/teams/cru-2023/Image2.png', alt: 'Mock image 2 for CRU Robot Games 2023', caption: 'Mock image 2', type: 'photo' },
      // { src: '/images/teams/cru-2023/Image3.png', alt: 'Mock image 3 for CRU Robot Games 2023', caption: 'Mock image 3', type: 'photo' },
      // { src: '/images/teams/cru-2023/Image4.png', alt: 'Mock image 4 for CRU Robot Games 2023', caption: 'Mock image 4', type: 'photo' },
    ],
  },
  {
    id: 'tinyml-2023', title: 'Arduino Education Day Thailand', year: '2023', kind: 'achievement',
    summary: 'The Arduino TinyML competition at Arduino Education Day Thailand.',
    milestones: [
      { kind: 'award', event: 'Arduino TinyML Competition', result: '1st Place', detail: 'Arduino Education Day Thailand 2023' },
    ],
    role: '',
    images: [
      { src: '/images/teams/tinyml-2023/Image1.png', alt: 'Mock image 1 for Arduino Education Day 2023', caption: 'Award', type: 'photo' },
      { src: '/images/teams/tinyml-2023/Image2.png', alt: 'Mock image 2 for Arduino Education Day 2023', caption: 'Presentation', type: 'photo' },
      { src: '/images/teams/tinyml-2023/Image3.png', alt: 'Mock image 3 for Arduino Education Day 2023', caption: 'Activity', type: 'photo' },
      // { src: '/images/teams/tinyml-2023/Image4.png', alt: 'Mock image 4 for Arduino Education Day 2023', caption: 'Mock image 4', type: 'photo' },
    ],
  },
  {
    id: 'earthquake-support', title: 'Earthquake Rescue Support', year: '', kind: 'activity', team: 'iRAP Robot',
    summary: 'Rescue support with the iRAP Robot club at the State Audit Office building.',
    milestones: [
      { kind: 'activity', event: 'Earthquake rescue operation', result: 'Community Support', detail: 'iRAP Robot' },
    ],
    role: '',
    images: [
      { src: '/images/teams/earthquake-support/Image1.png', alt: 'Mock image 1 for Earthquake Rescue Support', caption: 'Building', type: 'photo' },
      { src: '/images/teams/earthquake-support/Image2.png', alt: 'Mock image 2 for Earthquake Rescue Support', caption: 'Team', type: 'photo' },
      { src: '/images/teams/earthquake-support/Image3.png', alt: 'Mock image 3 for Earthquake Rescue Support', caption: 'Award', type: 'photo' },
      // { src: '/images/teams/earthquake-support/Image4.png', alt: 'Mock image 4 for Earthquake Rescue Support', caption: 'Mock image 4', type: 'photo' },
    ],
  },
  {
    id: 'engineering-expo', title: 'Engineering Expo', year: '2026', kind: 'activity', team: 'iRAP Robot',
    summary: 'Participation in the Engineering Expo.',
    milestones: [
      { kind: 'activity', event: 'Engineering Expo 2026 @ Queen Sirikit International Conference Center', result: 'Participation', detail: 'iRAP Robot' },
    ],
    role: '',
    images: [
      { src: '/images/teams/engineering-expo/Image1.png', alt: 'Mock image 1 for Engineering Expo', caption: 'Presentation', type: 'photo' },
      { src: '/images/teams/engineering-expo/Image2.png', alt: 'Mock image 2 for Engineering Expo', caption: 'iRAP Booth', type: 'photo' },
      { src: '/images/teams/engineering-expo/Image3.png', alt: 'Mock image 3 for Engineering Expo', caption: 'Activity', type: 'photo' },
      // { src: '/images/teams/engineering-expo/Image4.png', alt: 'Mock image 4 for Engineering Expo', caption: 'Mock image 4', type: 'photo' },
    ],
  },
]
