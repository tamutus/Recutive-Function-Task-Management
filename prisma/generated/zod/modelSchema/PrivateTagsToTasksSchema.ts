import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE TAGS TO TASKS SCHEMA
/////////////////////////////////////////

/**
 * A person can put their personal tags on tasks
 */
export const PrivateTagsToTasksSchema = z.object({
  tagId: z.number().int(),
  taskId: z.number().int(),
})

export type PrivateTagsToTasks = z.infer<typeof PrivateTagsToTasksSchema>

export default PrivateTagsToTasksSchema;
