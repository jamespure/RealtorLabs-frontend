export interface PropertyListing {
  dateSold: number | null | Date;
  propertyType: string | null;
  lotAreaValue: number | null;
  address: string | number | null;
  imgSrc: number | string | null;
  price: number | null;
  bedrooms: number | null;
  unit: string | number | null;
  longitude: number | null;
  latitude: number | null;
  listingStatus: string | null;
  zpid: number | null;
  listingSubType: { is_FSBA: boolean };
  contingentListingType: string | number | null;
  daysOnZillow: number | null;
  bathrooms: number | null;
  livingArea: number | null;
  country: string | null;
  currency: string | null;
  lotAreaUnit: string | null;
  hasImage: boolean;
}
