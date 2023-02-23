import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Animal } from '../Types/AnimalTypes';
interface AnimalStateType {
  animals: Animal[];
  loading: boolean;
}

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
      state.animals = [...state.animals, action.payload];
    },

    setRemove: (state, action: PayloadAction<Animal['name']>) => {
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
