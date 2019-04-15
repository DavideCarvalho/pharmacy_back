export interface IPharmacyDto {
  name: string;
  location: {
    latitude: number,
    longitude: number,
  };
}
