import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToProjectsProjectIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToProjectsProjectIdEnergyIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  energyId: z.number()
}).strict();

export default EnergiesToProjectsProjectIdEnergyIdCompoundUniqueInputSchema;
