import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUncheckedCreateWithoutTagInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema;
