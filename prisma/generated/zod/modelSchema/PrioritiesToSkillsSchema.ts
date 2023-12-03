import { z } from 'zod';

/////////////////////////////////////////
// PRIORITIES TO SKILLS SCHEMA
/////////////////////////////////////////

/**
 * People can associate specific skills with their priorities.
 */
export const PrioritiesToSkillsSchema = z.object({
  priorityId: z.number().int(),
  skillId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrioritiesToSkills = z.infer<typeof PrioritiesToSkillsSchema>

export default PrioritiesToSkillsSchema;
