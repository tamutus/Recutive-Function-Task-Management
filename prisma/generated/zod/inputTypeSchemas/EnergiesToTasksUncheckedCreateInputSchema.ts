import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTasksUncheckedCreateInputSchema: z.ZodType<Prisma.EnergiesToTasksUncheckedCreateInput> = z.object({
  energyId: z.number().int(),
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToTasksUncheckedCreateInputSchema;
