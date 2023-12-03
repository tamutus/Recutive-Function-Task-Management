import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema';

export const TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInput> = z.object({
  id: z.number().int().optional(),
  taskId: z.number().int(),
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema).optional()
}).strict();

export default TaskWorkUncheckedCreateWithoutPrivateEnergyChangesInputSchema;
