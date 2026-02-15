'use client'
import { services } from "@/types/services";
import Heading from "../ui/Heading";
import ServiceCard from "../ui/ServiceCard";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";

const ServicesSection = () =>
{

  const handleCardClick = (serviceId: number) =>
  {
    console.log("Clicked service:", serviceId);
    // Later: Open modal or navigate to case study page
  };

  return (
    <section className="bg-primary-light px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center my-6 md:mb-12">
          <SubHeadingContainer>Service Section</SubHeadingContainer>
          <Heading as="h2" normalText="What I" highlightText="Help You Build" />
          <SimplePara className="mt-2">
            From clean landing pages to full web apps, I focus on building fast,
            scalable, and user-friendly digital experiences.
          </SimplePara>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onClick={() => handleCardClick(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;