import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToTagsUncheckedCreateWithoutTagInput> = z.object({
  energyId: z.number().int(),
  taggerId: z.number().int(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToTagsUncheckedCreateWithoutTagInputSchema;
