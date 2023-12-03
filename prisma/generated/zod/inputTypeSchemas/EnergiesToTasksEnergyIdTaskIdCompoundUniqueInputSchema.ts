import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToTasksEnergyIdTaskIdCompoundUniqueInput> = z.object({
  energyId: z.number(),
  taskId: z.number()
}).strict();

export default EnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema;
