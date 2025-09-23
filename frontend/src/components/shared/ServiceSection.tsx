// src/components/shared/ServiceSection.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { TOUR_SERVICES } from '@/services/Options';
import { Plane, Hotel, Car, Map, Briefcase, Award } from 'lucide-react';

const serviceIcons: any = {
  "Plane": <Plane className="size-6 text-white" />,
  "Hotel": <Hotel className="size-6 text-white" />,
  "Car": <Car className="size-6 text-white" />,
  "Map": <Map className="size-6 text-white" />,
  "Briefcase": <Briefcase className="size-6 text-white" />,
  "Award": <Award className="size-6 text-white" />,
};

function ServiceSection() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Our Travel Services</h2>
      <p className="text-center text-gray-600 mb-10">
        Comprehensive travel solutions designed to make your Indian adventure seamless and unforgettable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TOUR_SERVICES.map((service, index) => (
          <Card key={index} className="p-6 relative hover:shadow-xl transition-shadow duration-300">
            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{service.tag}</span>
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-500 rounded-full p-3">
                {serviceIcons[service.icon]}
              </div>
              <h3 className="text-xl font-bold">{service.name}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
            <Button asChild className="w-full">
              <Link href={`/services/${service.__id}`}>Learn More</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;