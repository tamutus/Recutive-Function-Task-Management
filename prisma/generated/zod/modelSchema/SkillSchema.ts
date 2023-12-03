import { z } from 'zod';

/////////////////////////////////////////
// SKILL SCHEMA
/////////////////////////////////////////

/**
 * Skills can involve tasks and be tagged. People can associate skills with their stuff, or templates. People can also connect energies to skills.
 */
export const SkillSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  info: z.string().nullable(),
})

export type Skill = z.infer<typeof SkillSchema>

export default SkillSchema;
