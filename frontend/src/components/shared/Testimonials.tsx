// src/components/shared/Testimonials.tsx
"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/services/Options';

function Testimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Travelers Say</h2>
        <p className="text-gray-600 mb-10">
          Don't just take our word for it. Here's what our satisfied travelers have to say about their incredible India experiences
        </p>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex text-yellow-400 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="size-5 fill-current" />
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 italic mb-4">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;