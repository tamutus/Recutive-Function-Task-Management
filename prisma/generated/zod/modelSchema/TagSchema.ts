import { z } from 'zod';

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

/**
 * Tags can be applied to basically everything. They can be followed, which means your feed will show those things.
 */
export const TagSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  info: z.string().nullable(),
  nsfw: z.boolean(),
  color: z.string().nullable(),
})

export type Tag = z.infer<typeof TagSchema>

export default TagSchema;
