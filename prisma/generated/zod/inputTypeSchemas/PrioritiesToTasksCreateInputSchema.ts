import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateNestedOneWithoutTasksInputSchema } from './PriorityCreateNestedOneWithoutTasksInputSchema';
import { TaskCreateNestedOneWithoutPrioritiesInputSchema } from './TaskCreateNestedOneWithoutPrioritiesInputSchema';

export const PrioritiesToTasksCreateInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutTasksInputSchema),
  task: z.lazy(() => TaskCreateNestedOneWithoutPrioritiesInputSchema)
}).strict();

export default PrioritiesToTasksCreateInputSchema;
