import { z } from 'zod';

/////////////////////////////////////////
// PERSONS TO TAGS SCHEMA
/////////////////////////////////////////

/**
 * Signifies that a Person follows a Tag
 */
export const PersonsToTagsSchema = z.object({
  followerId: z.number().int(),
  tagId: z.number().int(),
})

export type PersonsToTags = z.infer<typeof PersonsToTagsSchema>

export default PersonsToTagsSchema;
