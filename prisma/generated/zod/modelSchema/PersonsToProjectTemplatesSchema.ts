import { z } from 'zod';

/////////////////////////////////////////
// PERSONS TO PROJECT TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * Attributions for project template collaborators
 */
export const PersonsToProjectTemplatesSchema = z.object({
  personId: z.number().int(),
  projectId: z.number().int(),
})

export type PersonsToProjectTemplates = z.infer<typeof PersonsToProjectTemplatesSchema>

export default PersonsToProjectTemplatesSchema;
