import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema';

export const TaskWorkCreateWithoutTaskInputSchema: z.ZodType<Prisma.TaskWorkCreateWithoutTaskInput> = z.object({
  notes: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema).optional()
}).strict();

export default TaskWorkCreateWithoutTaskInputSchema;
