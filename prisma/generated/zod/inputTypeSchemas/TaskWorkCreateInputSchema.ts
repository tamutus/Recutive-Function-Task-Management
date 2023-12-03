import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutWorkInputSchema } from './TaskCreateNestedOneWithoutWorkInputSchema';
import { EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema';

export const TaskWorkCreateInputSchema: z.ZodType<Prisma.TaskWorkCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutWorkInputSchema),
  energyChanges: z.lazy(() => EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema).optional()
}).strict();

export default TaskWorkCreateInputSchema;
