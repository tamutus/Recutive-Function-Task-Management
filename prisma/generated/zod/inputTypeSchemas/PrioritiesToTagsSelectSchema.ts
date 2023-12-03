import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PriorityArgsSchema } from "../outputTypeSchemas/PriorityArgsSchema"

export const PrioritiesToTagsSelectSchema: z.ZodType<Prisma.PrioritiesToTagsSelect> = z.object({
  tagId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  notes: z.boolean().optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  priority: z.union([z.boolean(),z.lazy(() => PriorityArgsSchema)]).optional(),
}).strict()

export default PrioritiesToTagsSelectSchema;
