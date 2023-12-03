import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTagsCreateManyFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsCreateManyFollowerInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PersonsToTagsCreateManyFollowerInputSchema;
