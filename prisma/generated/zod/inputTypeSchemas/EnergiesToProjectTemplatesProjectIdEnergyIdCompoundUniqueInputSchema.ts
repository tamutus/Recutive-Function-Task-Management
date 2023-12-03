import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  energyId: z.number()
}).strict();

export default EnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema;
