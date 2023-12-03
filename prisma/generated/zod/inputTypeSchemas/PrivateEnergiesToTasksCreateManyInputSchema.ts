import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTasksCreateManyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateManyInput> = z.object({
  energyId: z.number().int(),
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToTasksCreateManyInputSchema;
