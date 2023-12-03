import { z } from 'zod';

/////////////////////////////////////////
// PROJECT TEMPLATES TO TAGS SCHEMA
/////////////////////////////////////////

/**
 * Project templates can be tagged
 */
export const ProjectTemplatesToTagsSchema = z.object({
  projectId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int(),
})

export type ProjectTemplatesToTags = z.infer<typeof ProjectTemplatesToTagsSchema>

export default ProjectTemplatesToTagsSchema;
