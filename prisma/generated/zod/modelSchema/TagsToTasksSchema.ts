import { z } from 'zod';

/////////////////////////////////////////
// TAGS TO TASKS SCHEMA
/////////////////////////////////////////

/**
 * People can tag tasks
 */
export const TagsToTasksSchema = z.object({
  tagId: z.number().int(),
  taskId: z.number().int(),
})

export type TagsToTasks = z.infer<typeof TagsToTasksSchema>

export default TagsToTasksSchema;
