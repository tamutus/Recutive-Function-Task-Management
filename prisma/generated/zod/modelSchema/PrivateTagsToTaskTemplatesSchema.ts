import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE TAGS TO TASK TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * People can mark task templates with their personal tags
 */
export const PrivateTagsToTaskTemplatesSchema = z.object({
  taskId: z.number().int(),
  tagId: z.number().int(),
})

export type PrivateTagsToTaskTemplates = z.infer<typeof PrivateTagsToTaskTemplatesSchema>

export default PrivateTagsToTaskTemplatesSchema;
