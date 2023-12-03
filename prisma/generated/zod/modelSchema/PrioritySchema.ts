import { z } from 'zod';

/////////////////////////////////////////
// PRIORITY SCHEMA
/////////////////////////////////////////

/**
 * Priorities represent personal goals
 */
export const PrioritySchema = z.object({
  id: z.number().int(),
  personId: z.number().int(),
  info: z.string().nullable(),
  color: z.string().nullable(),
})

export type Priority = z.infer<typeof PrioritySchema>

export default PrioritySchema;
