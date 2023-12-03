import { z } from 'zod';

/////////////////////////////////////////
// SKILLS TO TAGS SCHEMA
/////////////////////////////////////////

/**
 * Tags on skills
 */
export const SkillsToTagsSchema = z.object({
  skillId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int(),
})

export type SkillsToTags = z.infer<typeof SkillsToTagsSchema>

export default SkillsToTagsSchema;
