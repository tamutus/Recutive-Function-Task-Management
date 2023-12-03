import { z } from 'zod';

/////////////////////////////////////////
// PERSONS TO SKILL PATHS SCHEMA
/////////////////////////////////////////

/**
 * People on skill paths
 */
export const PersonsToSkillPathsSchema = z.object({
  personId: z.number().int(),
  skillId: z.number().int(),
  notes: z.string().nullable(),
})

export type PersonsToSkillPaths = z.infer<typeof PersonsToSkillPathsSchema>

export default PersonsToSkillPathsSchema;
