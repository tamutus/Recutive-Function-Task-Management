import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInput> = z.object({
  taskId: z.number(),
  energyId: z.number()
}).strict();

export default EnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInputSchema;
