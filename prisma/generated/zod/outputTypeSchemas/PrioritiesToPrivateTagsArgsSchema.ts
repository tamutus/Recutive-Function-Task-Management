import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsSelectSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsSelectSchema';
import { PrioritiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsIncludeSchema';

export const PrioritiesToPrivateTagsArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsDefaultArgs> = z.object({
  select: z.lazy(() => PrioritiesToPrivateTagsSelectSchema).optional(),
  include: z.lazy(() => PrioritiesToPrivateTagsIncludeSchema).optional(),
}).strict();

export default PrioritiesToPrivateTagsArgsSchema;
