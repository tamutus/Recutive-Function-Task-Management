import { z } from 'zod';

/////////////////////////////////////////
// SKILLS TO SKILL PATHS SCHEMA
/////////////////////////////////////////

/**
 * Tracks which skills are in which skill path
 */
export const SkillsToSkillPathsSchema = z.object({
  skillId: z.number().int(),
  skillPathId: z.number().int(),
})

export type SkillsToSkillPaths = z.infer<typeof SkillsToSkillPathsSchema>

export default SkillsToSkillPathsSchema;
