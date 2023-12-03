import { z } from 'zod';
import { LinkTypeSchema } from '../inputTypeSchemas/LinkTypeSchema'

/////////////////////////////////////////
// TASK LINK SCHEMA
/////////////////////////////////////////

/**
 * Relationships between tasks
 */
export const TaskLinkSchema = z.object({
  linkType: LinkTypeSchema,
  precursorId: z.number().int(),
  successorId: z.number().int(),
})

export type TaskLink = z.infer<typeof TaskLinkSchema>

export default TaskLinkSchema;
