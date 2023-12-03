import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateNestedOneWithoutProjectsInputSchema } from './PriorityCreateNestedOneWithoutProjectsInputSchema';

export const PrioritiesToProjectsCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateWithoutProjectInput> = z.object({
  notes: z.string().optional().nullable(),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default PrioritiesToProjectsCreateWithoutProjectInputSchema;
