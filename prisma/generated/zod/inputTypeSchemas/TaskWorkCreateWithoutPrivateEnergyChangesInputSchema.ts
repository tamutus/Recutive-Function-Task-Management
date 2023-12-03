import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutWorkInputSchema } from './TaskCreateNestedOneWithoutWorkInputSchema';
import { EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema';

export const TaskWorkCreateWithoutPrivateEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkCreateWithoutPrivateEnergyChangesInput> = z.object({
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutWorkInputSchema),
  energyChanges: z.lazy(() => EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema).optional()
}).strict();

export default TaskWorkCreateWithoutPrivateEnergyChangesInputSchema;
