import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTagsUncheckedCreateWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedCreateWithoutFollowerInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PersonsToTagsUncheckedCreateWithoutFollowerInputSchema;
