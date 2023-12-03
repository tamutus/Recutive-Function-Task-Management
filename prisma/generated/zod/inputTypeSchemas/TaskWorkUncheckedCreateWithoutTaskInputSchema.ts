import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema';

export const TaskWorkUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.TaskWorkUncheckedCreateWithoutTaskInput> = z.object({
  id: z.number().int().optional(),
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutWorkInputSchema).optional()
}).strict();

export default TaskWorkUncheckedCreateWithoutTaskInputSchema;
