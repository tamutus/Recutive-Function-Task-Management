import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTagsFollowerIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.PersonsToTagsFollowerIdTagIdCompoundUniqueInput> = z.object({
  followerId: z.number(),
  tagId: z.number()
}).strict();

export default PersonsToTagsFollowerIdTagIdCompoundUniqueInputSchema;
