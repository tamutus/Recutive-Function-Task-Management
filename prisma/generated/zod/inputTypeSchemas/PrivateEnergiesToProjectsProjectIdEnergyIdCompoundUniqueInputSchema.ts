import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectsProjectIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsProjectIdEnergyIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  energyId: z.number()
}).strict();

export default PrivateEnergiesToProjectsProjectIdEnergyIdCompoundUniqueInputSchema;
