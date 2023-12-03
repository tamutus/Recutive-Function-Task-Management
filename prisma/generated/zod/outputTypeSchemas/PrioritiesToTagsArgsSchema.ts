import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsSelectSchema } from '../inputTypeSchemas/PrioritiesToTagsSelectSchema';
import { PrioritiesToTagsIncludeSchema } from '../inputTypeSchemas/PrioritiesToTagsIncludeSchema';

export const PrioritiesToTagsArgsSchema: z.ZodType<Prisma.PrioritiesToTagsDefaultArgs> = z.object({
  select: z.lazy(() => PrioritiesToTagsSelectSchema).optional(),
  include: z.lazy(() => PrioritiesToTagsIncludeSchema).optional(),
}).strict();

export default PrioritiesToTagsArgsSchema;
