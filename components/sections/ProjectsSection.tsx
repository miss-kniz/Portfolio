"use client";
import Heading from "../ui/Heading";
import projectCard from "../ui/projectCard";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import { Lightbulb } from "phosphor-react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/types/projects";

const ProjectsSection = () => {
  const handleCardClick = (projectId: number) => {
    console.log("Clicked project:", projectId);
    // Later: Open modal or navigate to case study page
  };

  return (
    <section>
      <div className="max-w-5xl mx-auto md:py-4 px-2">
        <div className="text-center my-6 md:mb-12">
          <SubHeadingContainer>
            <div className="flex items-center gap-2 relative justify-center">
              <span className="inline-block py-1 px-2 rounded-full bg-white">
                <Lightbulb weight="fill" className="w-4 h-4 text-yellow-500" />
              </span>
              Projects Section
            </div>
          </SubHeadingContainer>
          <Heading
            as="h2"
            normalText="Here's My"
            highlightText="Selected Work"
          />
          <SimplePara className="mt-2">
            A few examples of products and platforms I’ve helped bring to life.
          </SimplePara>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => handleCardClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
