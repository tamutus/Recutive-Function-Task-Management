import { z } from 'zod';
import { LinkTypeSchema } from '../inputTypeSchemas/LinkTypeSchema'

/////////////////////////////////////////
// TASK TEMPLATE LINK SCHEMA
/////////////////////////////////////////

/**
 * Relationships between task templates
 */
export const TaskTemplateLinkSchema = z.object({
  linkType: LinkTypeSchema,
  precursorId: z.number().int(),
  successorId: z.number().int(),
})

export type TaskTemplateLink = z.infer<typeof TaskTemplateLinkSchema>

export default TaskTemplateLinkSchema;
