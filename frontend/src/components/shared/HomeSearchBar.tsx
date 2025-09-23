// src/components/shared/HomeSearchBar.tsx
"use client";
import React, { useState } from "react";
import { Search, MapPin, Users, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function HomeSearchBar() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="relative z-10 -mt-20 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Location Input */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <MapPin className="text-gray-500" />
          <Input placeholder="Search For A Destination" className="border-none" />
        </div>

        {/* Guests Input */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Users className="text-gray-500" />
          <Select>
            <SelectTrigger className="w-full border-none">
              <SelectValue placeholder="How many Guests?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Guests</SelectLabel>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="6">6 Guests</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Date Picker */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <CalendarIcon className="text-gray-500" />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"ghost"}
                className={cn(
                  "w-full justify-start text-left font-normal border-none",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-white w-full md:w-auto">
          Search
        </Button>
      </div>
    </div>
  );
}