import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPrivateTagsUncheckedCreateInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUncheckedCreateInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToPrivateTagsUncheckedCreateInputSchema;
