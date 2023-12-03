import { z } from 'zod';

/////////////////////////////////////////
// PERSON SCHEMA
/////////////////////////////////////////

export const PersonSchema = z.object({
  id: z.number().int(),
  username: z.string().nullable(),
  bio: z.string().nullable(),
})

export type Person = z.infer<typeof PersonSchema>

export default PersonSchema;
