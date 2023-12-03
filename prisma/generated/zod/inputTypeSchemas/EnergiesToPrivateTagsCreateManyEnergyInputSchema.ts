import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPrivateTagsCreateManyEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsCreateManyEnergyInput> = z.object({
  tagId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToPrivateTagsCreateManyEnergyInputSchema;
