import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutPrioritiesInputSchema } from './ProjectCreateNestedOneWithoutPrioritiesInputSchema';

export const PrioritiesToProjectsCreateWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateWithoutPriorityInput> = z.object({
  notes: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutPrioritiesInputSchema)
}).strict();

export default PrioritiesToProjectsCreateWithoutPriorityInputSchema;
