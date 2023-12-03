import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutWorkInputSchema } from './TaskCreateNestedOneWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema';

export const TaskWorkCreateWithoutEnergyChangesInputSchema: z.ZodType<Prisma.TaskWorkCreateWithoutEnergyChangesInput> = z.object({
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutWorkInputSchema),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema).optional()
}).strict();

export default TaskWorkCreateWithoutEnergyChangesInputSchema;
