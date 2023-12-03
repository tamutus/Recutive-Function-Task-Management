import { z } from 'zod';

/////////////////////////////////////////
// SKILLS TO TASK TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * This join table tracks which skills are used in which task templates.
 */
export const SkillsToTaskTemplatesSchema = z.object({
  taskId: z.number().int(),
  skillId: z.number().int(),
})

export type SkillsToTaskTemplates = z.infer<typeof SkillsToTaskTemplatesSchema>

export default SkillsToTaskTemplatesSchema;
