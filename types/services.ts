// Define the shape for your project items (for case studies)
export interface ProjectItem
{
    id: number;
    title: string;
    description: string;
    serviceType: string; // Links to service.id
    imageUrl: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    isClientProject?: boolean; // True for paid work, false for demos
    result?: string; // Optional metric/result for client projects
}


export interface ServiceItem
{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    isDemo?: boolean;
}

export const services: ServiceItem[] = [
    {
        id: 1,
        title: "Landing Page Development",
        description: "Fast, SEO-friendly pages that convert.",
        imageUrl: "services/landing-page.webp",
        isDemo: false
    },
    {
        id: 2,
        title: "Small SaaS Applications",
        description: "Lightweight, scalable apps for growth.",
        imageUrl: "services/SaaS.webp",
        isDemo: true
    },
    {
        id: 3,
        title: "Website Performance Optimization",
        description: "Websites that load instantly on any device.",
        imageUrl: "services/optimization.webp",
        isDemo: true
    },
    {
        id: 4,
        title: "Layout Fixes & UI Improvements",
        description: "Polished layouts with smooth responsiveness.",
        imageUrl: "services/ui-fixes.webp",
        isDemo: true
    },
    {
        id: 5,
        title: "Figma / XD to Code with SEO",
        description: "Pixel-perfect, SEO-ready design-to-code.",
        imageUrl: "services/figma-to-code.webp",
        isDemo: true
    }
];



// Export your projects array (empty for now - add as you get client work)
export const projects: ProjectItem[] = [
    // Client projects go here
    {
        id: 1,
        title: "E-commerce Dashboard",
        description: "Real-time sales and inventory tracking dashboard.",
        serviceType: "Dashboard UI/UX", // Matches service.id
        imageUrl: "/images/projects/ecom-dashboard.jpg",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
        liveUrl: "https://example.com", // Replace with actual URLs
        githubUrl: "https://github.com/username/project",
        isClientProject: true,
        result: "+25% increase in admin efficiency"
    },
    // Personal projects go here
    {
        id: 2,
        title: "Fitness Tracker App",
        description: "PWA for workout logging with offline sync.",
        serviceType: "Progressive Web Apps",
        imageUrl: "/images/projects/fitness-app.jpg",
        technologies: ["React", "PWA", "IndexedDB", "Tailwind CSS"],
        githubUrl: "https://github.com/username/fitness-app",
        isClientProject: false
    }
];