export interface PACKAGETYPE {
  __id: string;
  name: string;
  image: string;
  days: number;
  nights: number;
  Overview: string[] | undefined;
  Highlight?: string[];
  duration?: string;
  Highlights?: string[] | undefined;
  highlightsImages?: HighlightImage[];
  maxPeople?: number; 
  Inclusion: string[] | undefined;
  Exclusion: string[] | undefined;
  Itinerary?: Itinerary[] | undefined;
  FAQs: Itinerary[] | undefined;
  Price?: number;
  subTitle?: string;

}

export type Itinerary = {
  name?: string;
  description?: string;
};

export type User = {
  _id: string;
  fullname: string;
  mobile: string;
  isVerified: boolean;
  CashbackAmount: number;
  CashbackDetail: {
    amount: number;
    date: Date;
  }[];
};

export type RecommendedHotel = {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
  amenities: {
    wifi?: boolean;
    pool?: boolean;
    spa?: boolean;
    restaurant?: boolean;
    gym?: boolean;
    heritage?: boolean;
    beach?: boolean;
    ayurveda?: boolean;
  };
  type: string;
};

export type AllHotel = {
  name: string;
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  amenities: {
    wifi?: boolean;
    pool?: boolean;
    spa?: boolean;
    restaurant?: boolean;
    gym?: boolean;
    heritage?: boolean;
    beach?: boolean;
    ayurveda?: boolean;
    parking?: boolean;
  };
  cancellation: string;
};

export type UserInput = {
  fullname: string;
  mobile: string;
  password: string;
  isoCode: string;
  answer: string;
  question: string;
};

export type LoginInput = {
  mobile: string;
  password: string;
  isoCode: string;
};

export type ResetInput = {
  mobile: string;
  password: string;
  isoCode: string;
  answer: string;
  question: string;
}

export type HotelType = {
  __id: string;
  city: string;
  hotels: HotelData[];
};

export type HotelData = {
  name: string;
  image: string;
  desc: string;
};

export type CarouselImage = {
  image: string;
  content: string;
};

export type ServiceType = {
  __id: string;
  name: string;
  Overview: string;
  image: CarouselImage[];
};

export interface DAYTOUR {
  iamge: CarouselImage[];
  cities: CITIESTYPE[];
}

interface HighlightImage {
  image: string;
  content: string;
}


export type CITIESTYPE = {
  name: string;
  Overview: Itinerary[];
};

export type ADVENTUREDATA = {
  name: string;
  iamge: string;
  desc: string;
};

export type ADVENTURETYPE = {
  iamges: CarouselImage[];
  data: ADVENTUREDATA[];
};

export type BOOKINGTYPE = {
  _id: string;
  PackageName: string;
  PackageDays: number;
  people: number;
  PackagePrice: number;
  startDate: Date;
  user: User;
  paymentStatus: PAYMENTSTATUSTYPE;
  PlaceList?: string[];
  hotel?: string;
  AdventureList?: string[];
};

export type QUERIESTYPE = {
  user: User;
  message: string;
  _id: string;
};

type PAYMENTSTATUSTYPE = {
  order_id: string;
  payment_id: string;
};

export type DETAILTYPES = {
  Users: number;
  Queries: number;
  Verified: number;
  Bookings: number;
  Unpaid: number;
};
