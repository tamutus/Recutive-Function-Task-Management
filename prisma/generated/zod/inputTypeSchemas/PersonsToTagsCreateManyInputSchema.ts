import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTagsCreateManyInputSchema: z.ZodType<Prisma.PersonsToTagsCreateManyInput> = z.object({
  followerId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default PersonsToTagsCreateManyInputSchema;
