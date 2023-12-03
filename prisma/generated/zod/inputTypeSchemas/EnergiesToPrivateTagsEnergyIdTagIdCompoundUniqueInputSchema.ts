import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInput> = z.object({
  energyId: z.number(),
  tagId: z.number()
}).strict();

export default EnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInputSchema;
