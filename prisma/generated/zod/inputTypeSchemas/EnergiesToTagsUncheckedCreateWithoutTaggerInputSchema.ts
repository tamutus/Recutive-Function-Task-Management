import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsUncheckedCreateWithoutTaggerInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToTagsUncheckedCreateWithoutTaggerInputSchema;
