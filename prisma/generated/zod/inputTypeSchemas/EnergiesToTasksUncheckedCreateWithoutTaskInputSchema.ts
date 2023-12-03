import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToTasksUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksUncheckedCreateWithoutTaskInput> = z.object({
  energyId: z.number().int(),
  notes: z.string().optional().nullable()
}).strict();

export default EnergiesToTasksUncheckedCreateWithoutTaskInputSchema;
