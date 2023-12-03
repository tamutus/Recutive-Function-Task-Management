import { z } from 'zod';

/////////////////////////////////////////
// TASK WORK SCHEMA
/////////////////////////////////////////

/**
 * Single sessions of work on a task. These track energy measurements
 */
export const TaskWorkSchema = z.object({
  id: z.number().int(),
  taskId: z.number().int(),
  notes: z.string().nullable(),
  startedAt: z.coerce.date().nullable(),
  endedAt: z.coerce.date().nullable(),
})

export type TaskWork = z.infer<typeof TaskWorkSchema>

export default TaskWorkSchema;
