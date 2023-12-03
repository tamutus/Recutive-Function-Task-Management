import { z } from 'zod';

/////////////////////////////////////////
// PROJECTS TO TAGS SCHEMA
/////////////////////////////////////////

/**
 * People can tag their projects
 */
export const ProjectsToTagsSchema = z.object({
  tagId: z.number().int(),
  projectId: z.number().int(),
})

export type ProjectsToTags = z.infer<typeof ProjectsToTagsSchema>

export default ProjectsToTagsSchema;
