import { Exercise } from './exercise'
import { Performer } from './performer'

export interface LeadersTable {
  type_qualification: {
    name: string
  }
  exercise: Exercise
  performer: Performer[]
}
