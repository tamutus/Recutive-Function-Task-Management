import { z } from 'zod';

/////////////////////////////////////////
// SKILL PATHS TO TAGS SCHEMA
/////////////////////////////////////////

/**
 * Tags on skill paths
 */
export const SkillPathsToTagsSchema = z.object({
  skillId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int(),
})

export type SkillPathsToTags = z.infer<typeof SkillPathsToTagsSchema>

export default SkillPathsToTagsSchema;
