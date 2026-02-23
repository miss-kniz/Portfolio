"use client";
import { useState } from "react";
import Heading from "../ui/Heading";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import { Lightbulb } from "phosphor-react";
import ProjectCard from "../ui/ProjectCard";
import { projects, ProjectItem } from "@/types/projects";

const ProjectsSection = () =>
{
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  // Gather unique categories from all projects
  const allCategories = Array.from(
    new Set(projects.flatMap((p) => p.categories))
  );
  const filterOptions = ["All", ...allCategories];

  // Filter projects based on selected category
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(selectedFilter));

  const handleCardClick = (projectId: number) =>
  {
    console.log("Clicked project:", projectId);
    // Later: Open modal or navigate to case study page
  };

  return (
    <section>
      <div className="max-w-5xl mx-auto md:py-4 px-2">
        {/* Header */}
        <div className="text-center my-4">
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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-start md:justify-center gap-2 mb-6">
          {filterOptions.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 text-sm md:text-base py-2 rounded-full font-medium transition 
                ${selectedFilter === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <ProjectCard
              key={project.id}
              {...project}
            // onClick={() => handleCardClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;