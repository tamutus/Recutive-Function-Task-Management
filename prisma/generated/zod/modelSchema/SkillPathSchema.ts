import { z } from 'zod';

/////////////////////////////////////////
// SKILL PATH SCHEMA
/////////////////////////////////////////

/**
 * A curriculum for a broader area of knowledge or expertise.
 */
export const SkillPathSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  info: z.string().nullable(),
})

export type SkillPath = z.infer<typeof SkillPathSchema>

export default SkillPathSchema;
