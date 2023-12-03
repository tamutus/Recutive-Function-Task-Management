import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateNestedOneWithoutTasksInputSchema } from './PriorityCreateNestedOneWithoutTasksInputSchema';

export const PrioritiesToTasksCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateWithoutTaskInput> = z.object({
  notes: z.string().optional().nullable(),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default PrioritiesToTasksCreateWithoutTaskInputSchema;
