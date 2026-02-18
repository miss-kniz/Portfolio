export interface ProjectItem {
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
export const projects: ProjectItem[] = [
  // Client projects go here
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Real-time sales and inventory tracking dashboard.",
    serviceType: "Dashboard UI/UX", // Matches service.id
    imageUrl: "projects/1.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    liveUrl: "https://example.com", // Replace with actual URLs
    githubUrl: "https://github.com/username/project",
    isClientProject: true,
    result: "+25% increase in admin efficiency",
  },
  // Personal projects go here
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "PWA for workout logging with offline sync.",
    serviceType: "Progressive Web Apps",
    imageUrl: "projects/2.webp",
    technologies: ["React", "PWA", "IndexedDB", "Tailwind CSS"],
    githubUrl: "https://github.com/username/fitness-app",
    isClientProject: false,
  },
];
