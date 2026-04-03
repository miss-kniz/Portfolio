import { TECH_STACK } from "@/config/user-data/projects";
import Heading from "./Heading";

interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
}

// Highlight important techs
const highlightTechs = [
  TECH_STACK.react,
  TECH_STACK.prisma,
  TECH_STACK["next.js"],
  TECH_STACK["redux toolkit"],
  TECH_STACK["rtk query"],
  TECH_STACK.nodejs,
  TECH_STACK.postgresql,
  TECH_STACK.express,
  TECH_STACK.typescript,
  TECH_STACK["express js"],
  "ui design",
];

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-glass rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 rounded-xl shadow-sm transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <Heading as="h4" normalText={title} center={false} />
        {description && (
          <p className="text-sm text-black-light mb-4 flex-1">{description}</p>
        )}

        {/* Technologies as small text chips */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {technologies.map((tech, index) => {
            const isHighlight = highlightTechs.includes(tech);
            return (
              <span
                key={index}
                className={`text-xs font-medium px-2 py-1 rounded-md ${
                  isHighlight
                    ? "bg-primary-light text-primary"
                    : "bg-black-light/10 text-black-light"
                }`}
                title={tech}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
