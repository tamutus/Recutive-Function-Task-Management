import { z } from 'zod';

/////////////////////////////////////////
// PRIORITIES TO TAGS SCHEMA
/////////////////////////////////////////

/**
 * Priorities are all personally defined, but canonical tags can be added to them.
 */
export const PrioritiesToTagsSchema = z.object({
  tagId: z.number().int(),
  priorityId: z.number().int(),
  notes: z.string().nullable(),
})

export type PrioritiesToTags = z.infer<typeof PrioritiesToTagsSchema>

export default PrioritiesToTagsSchema;
