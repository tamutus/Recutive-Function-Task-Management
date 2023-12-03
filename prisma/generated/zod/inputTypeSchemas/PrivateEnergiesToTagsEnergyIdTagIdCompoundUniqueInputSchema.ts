import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsEnergyIdTagIdCompoundUniqueInput> = z.object({
  energyId: z.number(),
  tagId: z.number()
}).strict();

export default PrivateEnergiesToTagsEnergyIdTagIdCompoundUniqueInputSchema;
