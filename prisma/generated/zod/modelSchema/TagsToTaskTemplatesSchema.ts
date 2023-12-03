import { z } from 'zod';

/////////////////////////////////////////
// TAGS TO TASK TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * Task templates can be tagged
 */
export const TagsToTaskTemplatesSchema = z.object({
  taskId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int(),
})

export type TagsToTaskTemplates = z.infer<typeof TagsToTaskTemplatesSchema>

export default TagsToTaskTemplatesSchema;
