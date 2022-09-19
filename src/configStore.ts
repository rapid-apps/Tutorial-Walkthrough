import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { History } from "history";
import { ApplicationState, createRootReducer } from "./features";


export default function configStore(
  history: History,
  initialState: ApplicationState
): EnhancedStore<ApplicationState> {
  const store = configureStore({
    reducer: createRootReducer(history),
    preloadedState: initialState
  })
  return store;
}
