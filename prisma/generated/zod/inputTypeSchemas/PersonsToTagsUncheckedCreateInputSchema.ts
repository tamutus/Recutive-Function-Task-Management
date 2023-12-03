import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTagsUncheckedCreateInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedCreateInput> = z.object({
  followerId: z.number().int(),
  tagId: z.number().int()
}).strict();

export default PersonsToTagsUncheckedCreateInputSchema;
