import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksUncheckedCreateWithoutEnergyInput> = z.object({
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToTasksUncheckedCreateWithoutEnergyInputSchema;
