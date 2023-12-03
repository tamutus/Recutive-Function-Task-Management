import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE ENERGIES TO TASKS SCHEMA
/////////////////////////////////////////

/**
 * People can connect to their canonically defined forms of energy.
 */
export const PrivateEnergiesToTasksSchema = z.object({
  energyId: z.number().int(),
  taskId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrivateEnergiesToTasks = z.infer<typeof PrivateEnergiesToTasksSchema>

export default PrivateEnergiesToTasksSchema;
