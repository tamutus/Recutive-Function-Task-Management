import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTasksCreateManyTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateManyTaskInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToTasksCreateManyTaskInputSchema;
