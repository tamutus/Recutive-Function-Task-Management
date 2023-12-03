import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"

export const PrioritiesToTagsIncludeSchema: z.ZodType<Prisma.PrioritiesToTagsInclude> = z.object({
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export default PrioritiesToTagsIncludeSchema;
