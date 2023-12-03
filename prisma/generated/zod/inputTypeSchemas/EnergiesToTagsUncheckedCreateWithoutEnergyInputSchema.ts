import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsUncheckedCreateWithoutEnergyInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToTagsUncheckedCreateWithoutEnergyInputSchema;
