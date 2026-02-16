import React from 'react';
import Heading from './Heading';
import { SimplePara } from './SubHeadingContainer';

interface ServiceCardProps
{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    onClick?: () => void;
}


const ServiceCard = ({ id, title, description, imageUrl, onClick }: ServiceCardProps) =>
{
    return (
        <div
            className="group p-1 w-full rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>


            {/* Content */}
            <div className="p-1 pt-2">
                {/* Badge */}
                <span className="hidden md:inline-block mb-2 px-2 py-1 text-xs font-medium text-white rounded-full bg-primary">
                    #{id.toString().padStart(2, '0')}
                </span>

                {/* Title */}
                <Heading
                    as="h3"
                    className='text-left'
                    normalText={title}
                />

                {/* Description */}
                <SimplePara className="hidden md:inline-block">{description}</SimplePara>
            </div>

            {/* Hover CTA */}
            {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 pb-4">
                <span className="text-[#7b2cbf] font-medium text-sm inline-flex items-center">
                    View project →
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </span>
            </div> */}
        </div>
    );
};

export default ServiceCard;
