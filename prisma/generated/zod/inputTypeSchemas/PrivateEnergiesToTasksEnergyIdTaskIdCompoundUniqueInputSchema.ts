import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksEnergyIdTaskIdCompoundUniqueInput> = z.object({
  energyId: z.number(),
  taskId: z.number()
}).strict();

export default PrivateEnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema;
