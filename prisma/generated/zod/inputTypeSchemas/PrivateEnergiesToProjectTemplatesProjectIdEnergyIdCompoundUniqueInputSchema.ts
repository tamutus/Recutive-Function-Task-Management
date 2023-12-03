import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInput> = z.object({
  projectId: z.number(),
  energyId: z.number()
}).strict();

export default PrivateEnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema;
