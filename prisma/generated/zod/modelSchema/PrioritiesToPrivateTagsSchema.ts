import { z } from 'zod';

/////////////////////////////////////////
// PRIORITIES TO PRIVATE TAGS SCHEMA
/////////////////////////////////////////

/**
 * Priorities are all personally defined. Private tags can be added to them.
 */
export const PrioritiesToPrivateTagsSchema = z.object({
  tagId: z.number().int(),
  priorityId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrioritiesToPrivateTags = z.infer<typeof PrioritiesToPrivateTagsSchema>

export default PrioritiesToPrivateTagsSchema;
