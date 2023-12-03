import { z } from 'zod';

/////////////////////////////////////////
// ENERGIES TO TASKS SCHEMA
/////////////////////////////////////////

/**
 * energies that a user associates with a task of theirs
 */
export const EnergiesToTasksSchema = z.object({
  energyId: z.number().int(),
  taskId: z.number().int(),
  notes: z.string().nullable(),
})

export type EnergiesToTasks = z.infer<typeof EnergiesToTasksSchema>

export default EnergiesToTasksSchema;
