import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTagsCreateManyEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsCreateManyEnergyInput> = z.object({
  tagId: z.number().int(),
  taggerId: z.number().int(),
  info: z.string().optional().nullable()
}).strict();

export default EnergiesToTagsCreateManyEnergyInputSchema;
