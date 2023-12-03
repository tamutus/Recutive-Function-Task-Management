import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksUncheckedCreateWithoutTaskInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default PrivateEnergiesToTasksUncheckedCreateWithoutTaskInputSchema;
