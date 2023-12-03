import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPrivateTagsCreateManyTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateManyTagInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToPrivateTagsCreateManyTagInputSchema;
