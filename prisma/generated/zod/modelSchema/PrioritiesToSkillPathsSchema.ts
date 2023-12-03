import { z } from 'zod';

/////////////////////////////////////////
// PRIORITIES TO SKILL PATHS SCHEMA
/////////////////////////////////////////

/**
 * People can associate skill paths with their priorities.
 */
export const PrioritiesToSkillPathsSchema = z.object({
  skillPathId: z.number().int(),
  priorityId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrioritiesToSkillPaths = z.infer<typeof PrioritiesToSkillPathsSchema>

export default PrioritiesToSkillPathsSchema;
