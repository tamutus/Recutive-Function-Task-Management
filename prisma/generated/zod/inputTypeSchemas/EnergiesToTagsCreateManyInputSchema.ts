import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTagsCreateManyInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateManyInput> = z.object({
  energyId: z.number().int(),
  tagId: z.number().int(),
  taggerId: z.number().int(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToTagsCreateManyInputSchema;
