import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import Bookings from './slices/Bookings.slice'
import Trainers from './slices/Trainers.slice'
import Trainings from './slices/Trainings.slice'
import TimeSlots from './slices/TimeSlots.slice'

const rootReducer = combineReducers({
  Bookings,
  Trainers,
  Trainings,
  TimeSlots
})

const store = configureStore({
  reducer: rootReducer,
})

export default store