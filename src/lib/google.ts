"use server";

import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();

export const autocomplete = async (input: string) => {
  if (!input) return [];
  try {
    const response = await client.placeQueryAutocomplete({
      params: {
        input,
        key: "AIzaSyAwRYINwIrDt_mPuOPk1eewPa7SvSFEBg0",
      },
    });
    return response.data.predictions ?? []; 
  } catch (error) {
    console.error("Error fetching predictions:", error);
    return [];
  }
};