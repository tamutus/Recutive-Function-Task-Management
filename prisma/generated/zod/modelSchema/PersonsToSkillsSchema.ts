import { z } from 'zod';

/////////////////////////////////////////
// PERSONS TO SKILLS SCHEMA
/////////////////////////////////////////

/**
 * Tracks people's progress in each skill
 */
export const PersonsToSkillsSchema = z.object({
  personId: z.number().int(),
  skillId: z.number().int(),
})

export type PersonsToSkills = z.infer<typeof PersonsToSkillsSchema>

export default PersonsToSkillsSchema;
