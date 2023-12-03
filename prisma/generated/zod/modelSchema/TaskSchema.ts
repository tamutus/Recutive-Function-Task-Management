import { z } from 'zod';

/////////////////////////////////////////
// TASK SCHEMA
/////////////////////////////////////////

/**
 * A task can be implemented from a task template, or a person can make their own one-off to-do.
 */
export const TaskSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  info: z.string().nullable(),
  color: z.string().nullable(),
  links: z.string().array(),
  templateId: z.number().int().nullable(),
  personId: z.number().int().nullable(),
  public: z.boolean(),
  publicAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  startAt: z.coerce.date().nullable(),
  startedAt: z.coerce.date().nullable(),
  dueAt: z.coerce.date().nullable(),
  endedAt: z.coerce.date().nullable(),
})

export type Task = z.infer<typeof TaskSchema>

export default TaskSchema;
