import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTagsCreateManyTagInputSchema: z.ZodType<Prisma.PersonsToTagsCreateManyTagInput> = z.object({
  followerId: z.number().int()
}).strict();

export default PersonsToTagsCreateManyTagInputSchema;
