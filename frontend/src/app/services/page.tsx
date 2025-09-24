// src/app/services/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SERVICES } from "@/services/Options";
import { ServiceType } from "@/services/types";
import DOMPurify from "dompurify";
import { Star, DollarSign, Headphones, Tag, SlidersHorizontal, Award, Plane, Hotel } from 'lucide-react';

// Mapping for the icons based on your data
const serviceCardIcons: any = {
  "Event Organizer": <Star className="size-6 text-white" />,
  "Car and Bike": <Headphones className="size-6 text-white" />,
  "Tour Guide Service": <Tag className="size-6 text-white" />,
  "Travel Insurance": <Award className="size-6 text-white" />,
  // Add other icons if needed
};

function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const openServiceModal = (service: ServiceType) => {
    setSelectedService(service);
  };

  const sanitizedContent = (html: string) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className="mt-20">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Our Travel Services
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Comprehensive travel solutions designed to make your Indian adventure seamless and unforgettable.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Dialog key={index} onOpenChange={(isOpen) => !isOpen && setSelectedService(null)}>
              <DialogTrigger asChild>
                <Card
                  onClick={() => openServiceModal(service)}
                  className="p-6 relative cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-blue-500 rounded-full p-3">
                        {serviceCardIcons[service.name] || <Star className="size-6 text-white" />}
                      </div>
                      <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-sm line-clamp-3">
                      {service.Overview}
                    </CardDescription>
                  </CardHeader>
                  <Button asChild className="w-full">
                    <div>Learn More</div>
                  </Button>
                </Card>
              </DialogTrigger>

              {/* Detailed view in a modal */}
              {selectedService && selectedService.__id === service.__id && (
                <DialogContent className="max-w-4xl p-0">
                  <DialogHeader className="p-6">
                    <DialogTitle>{selectedService.name}</DialogTitle>
                  </DialogHeader>

                  <div className="w-full h-[50vh] relative">
                    <Carousel
                      plugins={[Autoplay({ delay: 3000 })]}
                      className="w-full h-full"
                    >
                      <CarouselContent className="h-full">
                        {selectedService.image.map((img, idx) => (
                          <CarouselItem key={idx} className="h-full">
                            <div className="w-full h-full relative">
                              <Image
                                src={img.image}
                                alt={img.content}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                              />
                              <div className="absolute inset-0 bg-black/40" />
                              <div className="relative z-10 flex flex-col items-start justify-end p-16 h-full text-white">
                                <h1 className="text-5xl md:text-6xl font-bold font-serif mb-2">
                                  {selectedService.name}
                                </h1>
                                <p className="text-lg">{img.content}</p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-4 z-20" />
                      <CarouselNext className="absolute right-4 z-20" />
                    </Carousel>
                  </div>

                  <div className="p-6 overflow-y-auto max-h-[40vh]">
                    <div
                      className="text-sm font-medium text-gray-500 text-justify"
                      dangerouslySetInnerHTML={sanitizedContent(selectedService.Overview)}
                    ></div>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;