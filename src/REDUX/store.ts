import { configureStore } from '@reduxjs/toolkit';
import { animalApi } from './AnimalApi';
import animalReducer from './AnimalSlice';

const store = configureStore({
  reducer: {
    animal: animalReducer,
    [animalApi.reducerPath]: animalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// tips visam lielajam objektam
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState
// definēts tips dispatčiem
export type AppDispatch = typeof store.dispatch;
