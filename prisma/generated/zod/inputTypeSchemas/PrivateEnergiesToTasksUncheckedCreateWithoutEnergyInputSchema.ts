import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInput> = z.object({
  taskId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToTasksUncheckedCreateWithoutEnergyInputSchema;
