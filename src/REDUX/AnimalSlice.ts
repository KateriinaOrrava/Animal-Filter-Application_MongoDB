import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { animalApi } from './AnimalApi';

export type Animal = {
  _id?: string;
  name: string;
  type: string;
  img: string;
};

interface AnimalStateType {
  animals: Animal[];
  loading: boolean;
}

// Define the initial state using that type
// Te tiek dota sākotnētja vērtība [līdzīgi kā setState]
const initialState: AnimalStateType = {
  animals: [],
  loading: false,
};

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setAllAnimals: (state, action: PayloadAction<Animal[]>) => {
      state.animals = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setAddNew: (state, action: PayloadAction<Animal>) => {
      // state.animals=state.animals.concat(action.payload)
      state.animals = [...state.animals, action.payload];
    },

    setRemove: (state, action: PayloadAction<Animal['name']>) => {
      console.log(state.animals);
      console.log(action.payload);
      console.log(action);
      const index = state.animals
        .map((item) => item.name)
        .indexOf(action.payload);
      console.log(index);
      const name = action.payload;
      state.animals.filter((item) => item.name !== name);
    },
  },    
});


export const { setAllAnimals, setLoading, setAddNew, setRemove } =
  animalSlice.actions;

export default animalSlice.reducer;
