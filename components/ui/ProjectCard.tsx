interface ProjectCardProps
{
  title: string;
  description?: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
}

// Highlight important techs
const highlightTechs = ["react", "prisma", "redux toolkit", "rtk query", "nodejs", "postgresql"];

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
}: ProjectCardProps)
{
  return (
    <div className="group relative rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col">
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>
        )}

        {/* Technologies as small text chips */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {technologies.map((tech, index) =>
          {
            const isHighlight = highlightTechs.includes(tech.toLowerCase());
            return (
              <span
                key={index}
                className={`text-xs font-medium px-2 py-1 rounded-md ${isHighlight
                  ? "bg-purple-100 text-purple-700"
                  : "bg-gray-100 text-gray-700"
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