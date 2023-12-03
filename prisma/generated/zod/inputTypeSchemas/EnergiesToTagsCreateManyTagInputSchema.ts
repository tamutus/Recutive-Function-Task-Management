import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTagsCreateManyTagInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateManyTagInput> = z.object({
  energyId: z.number().int(),
  taggerId: z.number().int(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToTagsCreateManyTagInputSchema;
