import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutPrioritiesInputSchema } from './TaskCreateNestedOneWithoutPrioritiesInputSchema';

export const PrioritiesToTasksCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTasksCreateWithoutPriorityInput> = z.object({
  notes: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutPrioritiesInputSchema)
}).strict();

export default PrioritiesToTasksCreateWithoutPriorityInputSchema;
