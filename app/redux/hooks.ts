import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { Store, AnyAction } from 'redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<Store<RootState, AnyAction>>()
