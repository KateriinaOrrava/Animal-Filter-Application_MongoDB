import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Animal } from '../Types/AnimalTypes';

export const animalApi = createApi({
  reducerPath: 'animalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  tagTypes: ['Animals'],
  endpoints: (builder) => ({

    getAnimals: builder.query<Animal[], void>({
      query: () => `animals/`,
    }),

    getAnimalByType: builder.query<Animal[], string>({
      query: (type) => `animalType/${type}`,
    }),

    deleteAnimal: builder.mutation<void, string>({
      query: (name) => ({
        url: `/animalToDelete/${name}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Animals'],
    }),

    addNewAnimal: builder.mutation<Animal, Partial<Animal>>({
      query: (payload) => ({
        url: '/addAnimal',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Animals'],
    }),
  }),
});

export const {
  useGetAnimalsQuery,
  // useGetAnimalByNameQuery,
  useAddNewAnimalMutation,
  useGetAnimalByTypeQuery,
  useDeleteAnimalMutation
} = animalApi;
