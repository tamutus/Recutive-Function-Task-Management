import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutPrioritiesInputSchema } from './ProjectCreateNestedOneWithoutPrioritiesInputSchema';
import { PriorityCreateNestedOneWithoutProjectsInputSchema } from './PriorityCreateNestedOneWithoutProjectsInputSchema';

export const PrioritiesToProjectsCreateInputSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutPrioritiesInputSchema),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default PrioritiesToProjectsCreateInputSchema;
