// src/components/shared/OffersAndDeals.tsx
"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';
import { EXCLUSIVE_OFFERS } from '@/services/Options';

function OffersAndDeals() {
  return (
    <div className="bg-teal-400 text-white p-16 text-center">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Exclusive Offers & Deals</h2>
          <p className="text-white text-lg">
            Limited-time offers designed to make your Indian adventure more affordable. Don't miss these incredible savings!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXCLUSIVE_OFFERS.map((offer, index) => (
            <Card key={index} className="p-6 relative text-center bg-white/30 text-white rounded-lg shadow-md">
              <span className="absolute top-2 left-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full">{offer.tag}</span>
              <div className="mb-4">
                <p className="text-5xl font-bold mb-2">{offer.discount}</p>
                <h3 className="text-xl font-bold">{offer.title}</h3>
                <p className="text-sm mt-1">{offer.description}</p>
              </div>
              <p className="text-xs text-gray-200 mb-4">{offer.validity}</p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Claim Offer</Button>
            </Card>
          ))}
        </div>
        
        {/* Flash Sale Banner */}
        <div className="bg-white/30 text-white p-6 rounded-lg mt-10">
            <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
                <Tag className="mr-2" /> Flash Sale Alert!
            </h3>
            <p className="text-sm mt-2">
                Get an additional 15% OFF on all bookings made this week. Use code **FLASH15**.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
                <Button className="bg-orange-500 hover:bg-orange-600">Book Now & Save</Button>
                <Button variant="outline" className="text-white border-white">View All Deals</Button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OffersAndDeals;