import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToTagsEnergyIdTagIdCompoundUniqueInput> = z.object({
  energyId: z.number(),
  tagId: z.number()
}).strict();

export default EnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema;
