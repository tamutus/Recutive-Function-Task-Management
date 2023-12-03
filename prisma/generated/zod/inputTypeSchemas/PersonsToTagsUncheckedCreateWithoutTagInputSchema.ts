import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedCreateWithoutTagInput> = z.object({
  followerId: z.number().int()
}).strict();

export default PersonsToTagsUncheckedCreateWithoutTagInputSchema;
