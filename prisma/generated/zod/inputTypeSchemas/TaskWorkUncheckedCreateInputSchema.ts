import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema';

export const TaskWorkUncheckedCreateInputSchema: z.ZodType<Prisma.TaskWorkUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  taskId: z.number().int(),
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema).optional()
}).strict();

export default TaskWorkUncheckedCreateInputSchema;
