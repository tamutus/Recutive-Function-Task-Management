import { z } from 'zod';

/////////////////////////////////////////
// PERSONS TO TASK TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * Attributions for task template collaborators.
 */
export const PersonsToTaskTemplatesSchema = z.object({
  personId: z.number().int(),
  taskId: z.number().int(),
})

export type PersonsToTaskTemplates = z.infer<typeof PersonsToTaskTemplatesSchema>

export default PersonsToTaskTemplatesSchema;
