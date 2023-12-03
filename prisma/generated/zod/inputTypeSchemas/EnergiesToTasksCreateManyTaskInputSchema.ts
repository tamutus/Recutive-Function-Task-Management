import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTasksCreateManyTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksCreateManyTaskInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToTasksCreateManyTaskInputSchema;
