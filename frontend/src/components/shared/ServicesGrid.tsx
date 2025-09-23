// src/components/shared/ServicesGrid.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, DollarSign, Headphones, Tag, SlidersHorizontal, Award, Plane, Hotel } from 'lucide-react';
import { TOUR_SERVICES } from '@/services/Options';

// Mapping for the icons based on your data
const serviceCardIcons: any = {
  "Star": <Star className="size-6 text-white" />,
  "DollarSign": <DollarSign className="size-6 text-white" />,
  "Headphones": <Headphones className="size-6 text-white" />,
  "Tag": <Tag className="size-6 text-white" />,
  "SlidersHorizontal": <SlidersHorizontal className="size-6 text-white" />,
  "Award": <Award className="size-6 text-white" />,
  "Plane": <Plane className="size-6 text-white" />,
  "Hotel": <Hotel className="size-6 text-white" />,
};

export default function ServicesGrid() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Our Travel Services</h2>
      <p className="text-center text-gray-600 mb-10">
        Comprehensive travel solutions designed to make your Indian adventure seamless and unforgettable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TOUR_SERVICES.map((service, index) => (
          <Card key={index} className="p-0 overflow-hidden relative">
            <Image
                src={service.image}
                alt={service.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
            />
            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{service.tag}</span>
            <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-blue-500 rounded-full p-3">
                        {serviceCardIcons[service.icon] || <Star className="size-6 text-white" />}
                    </div>
                    <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                    {service.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                    ))}
                </ul>
                <Button asChild className="w-full">
                    <Link href={`/services/${service.__id}`}>Learn More</Link>
                </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}