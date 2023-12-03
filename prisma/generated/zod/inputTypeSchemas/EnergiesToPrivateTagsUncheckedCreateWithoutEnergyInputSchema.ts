import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInput> = z.object({
  tagId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToPrivateTagsUncheckedCreateWithoutEnergyInputSchema;
