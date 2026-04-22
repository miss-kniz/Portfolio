"use client";

import { highlightTechs } from "@/config/user-data/projects";
import Heading from "./Heading";
import { NavigationArrow } from "phosphor-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  id: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  id,
  githubUrl,
}: ProjectCardProps) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    router.prefetch(`/projects/${id}`);
  }, [id, router]);

  const navigateToProject = (id: string) => {
    setIsNavigating(true);
    router.push(`/projects/${id}`);
  };
  return (
    <div
      className={`group relative bg-glass rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col items-start cursor-pointer ${isNavigating ? "scale-[0.99] opacity-90" : ""}`}
      onClick={() => {
        if (!isNavigating) navigateToProject(id);
      }}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !isNavigating) {
          e.preventDefault();
          navigateToProject(id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-busy={isNavigating}
    >
      {isNavigating && (
        <div className="absolute inset-0 z-20 bg-background/35 backdrop-blur-[2px]">
          <div className="absolute inset-x-3 top-3 rounded-full border border-primary/15 bg-white/80 px-3 py-2 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full border border-primary/15 bg-primary/5 flex items-center justify-center">
                <span className="h-3.5 w-3.5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Opening case study
                </p>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full w-2/5 rounded-full bg-primary animate-loading-bar-short" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative w-full h-fit px-2 m-2 overflow-hidden rounded-lg group mx-auto">
        {(liveUrl || githubUrl) && (
          <a
            href={liveUrl ? liveUrl : githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Live Project"
            className="absolute text-white right-3 top-3 z-10 flex h-9 w-9 items-center flex-col justify-center rounded-md py-1 bg-primary shadow-md transition-transform duration-200 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <NavigationArrow weight="bold" className="h-5 w-5" />
            <span className="text-xs">{liveUrl ? "Live" : "Code"}</span>
          </a>
        )}
        <div className="overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={`Mehak Fatima naqvi (miss kniz)'s Project ${title}`}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-start gap-2 flex-1 px-6 w-full">
        <Heading as="h4" normalText={title} center={false} />
        {description && (
          <p className="text-sm text-black-light flex-1">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        )}

        {/* Technologies as small text chips */}
        <div className="flex gap-2 mb-1 flex-wrap">
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

        <div className="mb-4 flex items-center justify-between w-full">
          <span className="text-xs font-medium bg-primary text-white rounded-md p-1 flex items-start gap-1">
            Click to explore <i className="ri-arrow-right-long-fill"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
