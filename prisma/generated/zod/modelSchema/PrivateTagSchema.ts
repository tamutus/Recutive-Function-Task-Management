import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE TAG SCHEMA
/////////////////////////////////////////

/**
 * Private tags, where a person can't have more than one tag of the same name.
 */
export const PrivateTagSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  info: z.string().nullable(),
  nsfw: z.boolean(),
  color: z.string().nullable(),
  personId: z.number().int(),
})

export type PrivateTag = z.infer<typeof PrivateTagSchema>

export default PrivateTagSchema;
