import * as PhosphorIcons from "phosphor-react";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  liveLink,
}) {
  // Map technology names to installed Phosphor icon names
  const iconMap = {
    react: "ReactLogo",
    typescript: "TypeScriptLogo",
    javascript: "JsLogo",
    html: "HtmlLogo",
    css: "CssLogo",
    nodejs: "NodeLogo",
    mongodb: "MongoLogo",
    tailwind: "TailwindLogo",
    nextjs: "NextjsLogo",
    vue: "VueLogo",
    angular: "AngularLogo",
    python: "PythonLogo",
    threejs: "ThreeLogo",
    webgl: "Globe",
  };

  const getIconComponent = (techName) => {
    const iconName = iconMap[techName.toLowerCase()] || "Code";
    const IconComponent = PhosphorIcons[iconName];

    return IconComponent ? (
      <IconComponent size={20} weight="fill" />
    ) : (
      <PhosphorIcons.Code size={20} weight="fill" />
    );
  };
  console.log("img", imageUrl);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {/* imageUrl */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>

        {/* Technologies */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-700 hover:text-gray-900"
              title={tech}
            >
              {getIconComponent(tech)}
            </div>
          ))}
        </div>

        {/* Live Link */}
        <a
          href={liveLink}
          className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors inline-flex items-center gap-1"
        >
          Check Live Site <span>→</span>
        </a>
      </div>
    </div>
  );
}
