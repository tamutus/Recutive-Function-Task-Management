import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema';

export const TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkUncheckedCreateWithoutEnergyChangesInput> = z.object({
  id: z.number().int().optional(),
  taskId: z.number().int(),
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema).optional()
}).strict();

export default TaskWorkUncheckedCreateWithoutEnergyChangesInputSchema;
