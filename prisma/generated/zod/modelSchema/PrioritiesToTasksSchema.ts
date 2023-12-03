import { z } from 'zod';

/////////////////////////////////////////
// PRIORITIES TO TASKS SCHEMA
/////////////////////////////////////////

/**
 * People can assign their tasks to certain priorities of theirs.
 */
export const PrioritiesToTasksSchema = z.object({
  priorityId: z.number().int(),
  taskId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrioritiesToTasks = z.infer<typeof PrioritiesToTasksSchema>

export default PrioritiesToTasksSchema;
