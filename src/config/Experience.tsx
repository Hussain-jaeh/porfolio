import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import { getImagePath } from '@/lib/utils';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'DLHO Solutions',
    position: 'Software Engineer',
    location: 'Hybrid',
    image: getImagePath('/assets/dlho-logo.ico'),
    description: [
      'Developed scalable backend services using Node.js, AWS Lambda, and DynamoDB to handle job postings, applications, and recruiter workflows, ensuring high performance under 10k+ monthly active users',
      'Employed Agile methodologies (sprint planning, stand-ups, retrospectives) to collaborate with cross-functional teams, delivering features like PDF resume parsing (react-pdf-viewer) and real-time notifications (AWS SNS/SES) ahead of deadlines',
      'Optimized frontend performance via lazy loading, code splitting, and AWS CloudFront caching, achieving sub-2s page loads and smoother interactions for job seekers',
      'Designed a GraphQL API (AWS AppSync) to unify data fetching for the frontend, reducing over-fetching and improving mobile data usage efficiency by 35%',
      'Enhanced search functionality with OpenSearch, enabling fuzzy matching and geo-spatial queries for job listings, which increased recruiter satisfaction scores by 25%',
      'Built a responsive, mobile-friendly job search interface with Next.js, React, and TailwindCSS, enabling candidates to filter roles by location, salary, and job type, resulting in a 30% increase in user engagement'
    ],
    startDate: 'Jan 2024',
    endDate: 'Jan 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Teners',
    position: 'Software Engineer',
    location: 'Remote',
    image: getImagePath('/assets/teners.PNG'),
    description: [
      'Engineered interactive, responsive data visualizations in React Native for large-scale datasets, transforming complex information into actionable insights that streamlined stakeholder decision-making and improved data accessibility across mobile platforms',
      'Architected scalable, API-driven backend services using Node.js to facilitate real-time data synchronization between mobile clients and server infrastructure, ensuring robust performance, low latency, and seamless scalability for growing user demands',
      'Collaborated within Agile/Scrum frameworks to design and iterate on mobile UI components for e-commerce platforms, actively participating in sprint planning, daily stand-ups, and retrospectives to deliver polished, user-centric experiences on schedule',
      'Optimized mobile application performance through advanced techniques including lazy loading, code splitting, memoization, and intelligent caching strategies, achieving significantly faster load times, reduced bundle sizes, and fluid user interactions',
      'Implemented Redux state management architecture to orchestrate complex application states across mobile interfaces, reducing state-related bugs, improving code maintainability, and delivering a more consistent and responsive user experience'
    ],
    startDate: 'Jan 2024',
    endDate: 'Dec 2024',
    technologies: [
      {
        name: 'React Native',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'Saaspro',
    position: 'Software Engineer',
    location: 'Remote',
    image: getImagePath('/assets/saaspro.jpeg'),
    description: [
      'Sole frontend engineer developing healthcare applications with Next.js and React Native',
      'Built mobile app for secure doctor-patient communication',
      'Ensured HIPAA compliance and maintainable code for medical data handling',
      'Mentored two team members in frontend development best practices',
      'Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms',
      'Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations'
    ],
    startDate: 'June 2024',
    endDate: 'Jan 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'React Native',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'IE School',
    position: 'Software Engineer',
    location: 'Remote',
    image: getImagePath('/assets/ieschool.jpeg'),
    description: [
      'Contributed to IESchool (https://ieschool.com/), a prominent online application system, successfully onboarded 12 schools, serving 5000+ applicants and processed 1000+ applications within one year',
      'Racked up over 3,000,000 in the first year of IESchool release and currently made over a 200% increase in revenue generated this year',
      'Collaborated with the customer\'s success team to quickly resolve bugs, attend to user issues, assess UI/UX design for technical feasibility, and contributed to UX design',
      'Defined and enforced coding standards, best practices and development processes to ensure high quality and maintainable front-end code',
      'Mentored a team of 3 front-end developers and provided technical guidance, coaching and support'
    ],
    startDate: 'Jan 2022',
    endDate: 'Sept 2023',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
    ],
    website: 'https://ieschool.com/',
  },
  {
    isCurrent: false,
    company: 'Flexisaf Edu Soft',
    position: 'Software Engineer (Intern)',
    location: 'Remote',
    image: getImagePath('/assets/flexisaf.jpeg'),
    description: [
      'Maintained clean and organized code, ensuring that new features were implemented in a modular and maintainable manner',
      'Documented the implementation details and functionality of the new features for the benefit of the development team and future reference',
      'Built a user-friendly result checker and online signup application for NECO candidates ensuring a seamless and intuitive user experience',
      'Ensured the application was fully responsive, providing an optimal viewing and interaction experience across a wide range of devices, from desktops to mobile phones',
      'Collaborated with UI/UX designers to create a visually appealing and easy-to-navigate interface',
      'Actively sought and incorporated user feedback to renew and improve the newly added features, making data-driven decisions to enhance user satisfaction'
    ],
    startDate: 'Jan 2021',
    endDate: 'Dec 2022',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
    ],
    website: '#',
  },
];