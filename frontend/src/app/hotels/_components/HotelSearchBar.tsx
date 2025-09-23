// src/app/hotels/_components/HotelSearchBar.tsx
"use client";
import React, { useState } from "react";
import { Search, List, MapPin, CalendarIcon, Users, SlidersHorizontal, Map, Star, Wifi, Droplet, Dumbbell, Utensils, Home, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function HotelSearchBar() {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-7xl mx-auto -mt-10 relative z-10">
      <h2 className="text-2xl font-bold mb-4">Find Your Perfect Stay</h2>
      <p className="text-sm text-gray-500 mb-6">Discover amazing hotels across India with the best prices and exclusive deals</p>
      
      {/* Search Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="flex flex-col col-span-2">
            <label className="text-sm text-gray-500">Destination</label>
            <div className="relative">
                <Input placeholder="City, landmark, or..." className="pl-8" />
                <MapPin className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            </div>
        </div>
        
        <div className="flex flex-col">
            <label className="text-sm text-gray-500">Check In</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !checkInDate && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkInDate ? checkInDate.toLocaleDateString() : <span>Check In</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
              </PopoverContent>
            </Popover>
        </div>
        
        <div className="flex flex-col">
            <label className="text-sm text-gray-500">Check Out</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !checkOutDate && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOutDate ? checkOutDate.toLocaleDateString() : <span>Check Out</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
              </PopoverContent>
            </Popover>
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm text-gray-500">Guests & Rooms</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="2 guests, 1 room" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Guests & Rooms</SelectLabel>
                <SelectItem value="2g1r">2 guests, 1 room</SelectItem>
                <SelectItem value="4g2r">4 guests, 2 rooms</SelectItem>
                <SelectItem value="6g3r">6 guests, 3 rooms</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button className="w-full bg-orange-500 hover:bg-orange-600">Search Hotels</Button>
      
      {/* Filter and View Toggles */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-2">
            <Tabs defaultValue="list">
                <TabsList>
                    <TabsTrigger value="list">
                        <List className="size-4 mr-2"/> List View
                    </TabsTrigger>
                    <TabsTrigger value="map">
                        <Map className="size-4 mr-2"/> Map View
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
        
        <Button variant="outline" className="text-gray-600">
            <SlidersHorizontal className="size-4 mr-2"/> Filters
        </Button>
      </div>
    </div>
  );
}