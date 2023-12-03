import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTagsCreateManyTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateManyTaggerInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToTagsCreateManyTaggerInputSchema;
