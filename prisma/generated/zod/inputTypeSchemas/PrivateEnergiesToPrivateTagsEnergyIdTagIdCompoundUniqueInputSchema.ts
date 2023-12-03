import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInput> = z.object({
  energyId: z.number(),
  tagId: z.number()
}).strict();

export default PrivateEnergiesToPrivateTagsEnergyIdTagIdCompoundUniqueInputSchema;
