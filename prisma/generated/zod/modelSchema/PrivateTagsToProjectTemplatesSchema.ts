import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE TAGS TO PROJECT TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * People can put their own tags on project templates
 */
export const PrivateTagsToProjectTemplatesSchema = z.object({
  projectId: z.number().int(),
  privateTagId: z.number().int(),
})

export type PrivateTagsToProjectTemplates = z.infer<typeof PrivateTagsToProjectTemplatesSchema>

export default PrivateTagsToProjectTemplatesSchema;
