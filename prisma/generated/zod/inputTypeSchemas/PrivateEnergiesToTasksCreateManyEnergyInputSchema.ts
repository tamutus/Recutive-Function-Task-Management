import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTasksCreateManyEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateManyEnergyInput> = z.object({
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToTasksCreateManyEnergyInputSchema;
