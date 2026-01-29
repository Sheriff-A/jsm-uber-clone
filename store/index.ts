import { create } from "zustand";
import { DriverStore, LocationStore, MarkerData } from "@/types/type";

export const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLongitude: null,
  userLatitude: null,
  destinationAddress: null,
  destinationLongitude: null,
  destinationLatitude: null,
  setUserLocation: ({ latitude, longitude, address }) =>
    set({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }),

  setDestinationLocation: ({ latitude, longitude, address }) =>
    set({
      destinationAddress: address,
      destinationLongitude: longitude,
      destinationLatitude: latitude,
    }),
}));

export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [] as MarkerData[],
  selectedDriver: null,
  setSelectedDriver: (driverId: number) => set({ selectedDriver: driverId }),
  setDrivers: (drivers: MarkerData[]) => set({ drivers }),
  clearSelectedDriver: () => set({ selectedDriver: null }),
}));
