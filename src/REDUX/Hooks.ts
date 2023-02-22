import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// kā taisīsim dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

//kā ņemsim items
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector