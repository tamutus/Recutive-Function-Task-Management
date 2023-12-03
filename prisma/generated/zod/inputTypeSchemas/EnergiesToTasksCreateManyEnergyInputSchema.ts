import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTasksCreateManyEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksCreateManyEnergyInput> = z.object({
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToTasksCreateManyEnergyInputSchema;
