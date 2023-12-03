import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPrivateTagsCreateManyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateManyInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToPrivateTagsCreateManyInputSchema;
