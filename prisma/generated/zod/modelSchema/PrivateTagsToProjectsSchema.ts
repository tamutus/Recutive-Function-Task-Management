import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE TAGS TO PROJECTS SCHEMA
/////////////////////////////////////////

/**
 * People can put their personal tags on projects
 */
export const PrivateTagsToProjectsSchema = z.object({
  tagId: z.number().int(),
  projectId: z.number().int(),
})

export type PrivateTagsToProjects = z.infer<typeof PrivateTagsToProjectsSchema>

export default PrivateTagsToProjectsSchema;
