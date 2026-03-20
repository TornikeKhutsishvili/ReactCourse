import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Ibreweries } from "../../interfaces/breweries.interface";

// Define a service using a base URL and expected endpoints
const BASE_URL = import.meta.env.VITE_API_URL;
export const breweriesApi = createApi({
  reducerPath: 'breweriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}?per_page=""` }),
  tagTypes: ["Breweries"],
  endpoints: (build) => ({
    /**********************************************************************
                                All Breweries
    ***********************************************************************/
    fetchBreweries: build.query<Ibreweries[], { page: number, per_page: number }>({
      query: ({ page, per_page }) => ({
        url: "",
        params: { page: Number(page), per_page: Number(per_page) }
      }),
      providesTags: ["Breweries"]
    }),
  }),
})


/**********************************************************************
                            Details Brewery
***********************************************************************/
export const detailsBreweryApi = createApi({
  reducerPath: 'detailsBreweryApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["DetailsBrewery"],
  endpoints: (build) => ({
    fetchDetailsBrewery: build.query<Ibreweries, string|number>({
      query: (id) => ({ url: `/${id}` }),
      providesTags: ["DetailsBrewery"]
    }),
  }),
})


/**********************************************************************
                            Random Breweries
***********************************************************************/
export const randomBreweriesApi = createApi({
  reducerPath: 'randomBreweriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["RandomBreweries"],
  endpoints: (build) => ({
    fetchRandomBrewery: build.query<Ibreweries[], void>({
      query: () => ({ url: "/random" }),
      providesTags: ["RandomBreweries"]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchBreweriesQuery } = breweriesApi;
export const { useFetchDetailsBreweryQuery } = detailsBreweryApi;
export const { useFetchRandomBreweryQuery } = randomBreweriesApi;
