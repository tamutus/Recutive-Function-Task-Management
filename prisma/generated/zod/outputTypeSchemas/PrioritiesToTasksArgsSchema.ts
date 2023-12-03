import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksSelectSchema } from '../inputTypeSchemas/PrioritiesToTasksSelectSchema';
import { PrioritiesToTasksIncludeSchema } from '../inputTypeSchemas/PrioritiesToTasksIncludeSchema';

export const PrioritiesToTasksArgsSchema: z.ZodType<Prisma.PrioritiesToTasksDefaultArgs> = z.object({
  select: z.lazy(() => PrioritiesToTasksSelectSchema).optional(),
  include: z.lazy(() => PrioritiesToTasksIncludeSchema).optional(),
}).strict();

export default PrioritiesToTasksArgsSchema;
