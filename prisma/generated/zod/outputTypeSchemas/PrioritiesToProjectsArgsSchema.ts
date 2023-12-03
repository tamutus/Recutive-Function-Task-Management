import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsSelectSchema } from '../inputTypeSchemas/PrioritiesToProjectsSelectSchema';
import { PrioritiesToProjectsIncludeSchema } from '../inputTypeSchemas/PrioritiesToProjectsIncludeSchema';

export const PrioritiesToProjectsArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsDefaultArgs> = z.object({
  select: z.lazy(() => PrioritiesToProjectsSelectSchema).optional(),
  include: z.lazy(() => PrioritiesToProjectsIncludeSchema).optional(),
}).strict();

export default PrioritiesToProjectsArgsSchema;
