import ComputerVision from '@/components/technologies/ComputerVision';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import GPT4 from '@/components/technologies/GPT4';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import OpenAI from '@/components/technologies/OpenAI';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Streamlit from '@/components/technologies/Streamlit';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';
import { getImagePath } from '@/lib/utils';

export const projects: Project[] = [
   {
    title: 'Jobplaza',
    description:
      'Developed a job search platform for 10k+ monthly users using Node.js, AWS, and Next.js. Built a GraphQL API improving mobile efficiency by 35 and optimized frontend performance to sub-2s page loads',
    image: getImagePath('/project/company.svg'),
    link: 'https://app-dev.jobplaza.ng/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'NestJS', icon: <NestJs key="nestjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Git', icon: <Github key="git" /> },
    ],
  
    live: 'https://app-dev.jobplaza.ng/',
    details: false,
    projectDetailsPageSlug: '/projects/Jobplaza',
    isWorking: true,
  },
  {
    title: 'SecureSeed UI',
    description:
      'Built a comprehensive full-stack platform that connects startups with investors. Features secure user authentication, investment tracking, startup profiles, investor dashboards, and real-time communication tools to facilitate funding opportunities and business growth.',
    image: getImagePath('/project/secure-seed.png'),
    link: 'https://secureseed-ui.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'NestJS', icon: <NestJs key="nestjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Git', icon: <Github key="git" /> },
    ],
    live: 'https://secureseed-ui.vercel.app/',
    details: false,
    projectDetailsPageSlug: '/projects/secureseed-ui',
    isWorking: true,
  },

  {
    title: 'QA Bot with langchain',
    description:
      'Built an AI-powered Question Answering (QA) chatbot using LangChain that retrieves and generates accurate responses from structured and unstructured data sources. Implemented document ingestion, embeddings, vector search, and LLM-based response generation to deliver context-aware answers in real time',
    image: getImagePath('/project/appwrite.png'),
    link: 'https://github.com/Hussain-jaeh/langchain',
    technologies: [
      { name: 'Langchain', icon: <TypeScript key="typescript" /> },
            { name: 'Python', icon: <Python key="python" /> },
      { name: 'Computer Vision', icon: <ComputerVision key="cv" /> },
    ],
    github: 'https://github.com/Hussain-jaeh/langchain',
    live: 'https://github.com/Hussain-jaeh/langchain',
    details: false,
    projectDetailsPageSlug: '/projects/hand-sign-v2',
    isWorking: true,
  },
  {
    title: 'Form Render',
    description:
      'Developed a form renderer package that takes a DTO of JSON and turns it into a form. Implemented continuous delivery using GitHub Actions to build the package upon new release.',
    image: getImagePath('/project/form-renderer.jpg'),
    link: 'https://github.com/Hussain-jaeh/Rich-text-editor',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Git', icon: <Github key="git" /> },
    ],
    github: 'https://github.com/Hussain-jaeh/Rich-text-editor',
    live: 'https://github.com/Hussain-jaeh/Rich-text-editor',
    details: false,
    projectDetailsPageSlug: '/projects/form-render',
    isWorking: true,
  },

];
